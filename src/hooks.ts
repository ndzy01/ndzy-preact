import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { useContext, useState } from 'preact/hooks';
import { ReduxContext } from './redux';
import serviceAxios from './http';
import { encrypt, decrypt } from './utils';

export const useTodo = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(ReduxContext);
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const goPage = (path: string, options: any = {}) => {
    navigate(path, { ...options });
  };
  const initUser = () => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    serviceAxios
      .get('/users')
      .then((res) => {
        dispatch({ type: 'UPDATE', payload: { user: res.data, loading: false } });
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const initTags = () => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    serviceAxios('/tags')
      .then((res) => {
        dispatch({ type: 'UPDATE', payload: { tags: res.data, loading: false } });
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const getAllTodo = (params: { tagId?: string } = {}) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    serviceAxios
      .get('/todos', { params: { ...params, operationSource: 'h5' } })
      .then((res) => {
        dispatch({
          type: 'UPDATE',
          payload: {
            list: res.data.map((item: any) => ({
              ...item,
              detail: decrypt(item.detail, item.keyBase, item.ivBase),
            })),
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const createTodo = (values: any, cb?: any) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    const { text, keyBase, ivBase } = encrypt(values.detail);
    serviceAxios
      .post('/todos', { ...values, operationSource: 'h5', detail: text, keyBase, ivBase })
      .then(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
        getAllTodo();
        cb && cb();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const editTodo = (values: any, state: { id: string }, cb?: any) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    const { text, keyBase, ivBase } = encrypt(values.detail);
    serviceAxios
      .patch(`/todos/${state.id}`, {
        name: values.name,
        detail: text,
        keyBase,
        ivBase,
        link: values.link,
        deadline: dayjs(values.deadline).format('YYYY-MM-DD'),
        tagId: values.tagId,
      })
      .then(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
        getAllTodo();
        cb && cb();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const finishTodo = (item: ITodo) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    serviceAxios
      .patch(`/todos/${item.id}`, {
        isFinish: true,
      })
      .then(() => {
        getAllTodo();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const delTodo = (item: ITodo) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    serviceAxios
      .delete(`/todos/${item.id}`)
      .then(() => {
        getAllTodo();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const recoverTodo = (item: ITodo) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    serviceAxios
      .patch(`/todos/${item.id}`, {
        isFinish: false,
      })
      .then(() => {
        getAllTodo();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const signOut = () => {
    localStorage.setItem('token', '');
    goPage('/');
    window.location.reload();
  };
  const login = (values: { mobile: string; password: string }) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    serviceAxios
      .post('/users/login', { ...values })
      .then((res) => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
        if (res && res.data && res.data.token) {
          localStorage.setItem('token', res.data.token);
          goPage('/');
          window.location.reload();
        }
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const register = (values: { nickname: string; mobile: string; password: string }, cb?: any) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    serviceAxios
      .post('/users/register', { ...values })
      .then((res) => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
        if (res.status === 0) {
          cb && cb();
        }
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const delTag = (id: string) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    serviceAxios
      .delete(`/tags/${id}`)
      .then(() => {
        initTags();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const handleCreateTag = () => {
    if (!inputValue) {
      return;
    }
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    serviceAxios
      .post('/tags', { name: inputValue })
      .then(() => {
        setInputValue('');
        initTags();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const getUsers = async () => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    initUser();
    serviceAxios
      .get('/users/all')
      .then((res) => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
        setUsers(res.data);
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  const delUser = (item: User) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    serviceAxios
      .delete(`/users/${item.id}`)
      .then(() => {
        getUsers();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };
  return {
    inputValue,
    users,
    initUser,
    initTags,
    createTodo,
    editTodo,
    goPage,
    getAllTodo,
    finishTodo,
    delTodo,
    recoverTodo,
    signOut,
    login,
    register,
    delTag,
    handleCreateTag,
    setInputValue,
    getUsers,
    delUser,
  };
};
