import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useReducer } from 'preact/hooks';
import zhCn from 'antd/locale/zh_CN';
import Layout from './pages/Layout';
import Todo from './pages/Todo';
import Login from './pages/Login';
import Register from './pages/Register';
import UserList from './pages/UserList';
import NoMatch from './pages/NoMatch';

import { initialState, reducer, ReduxContext } from './redux';

const Router = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ConfigProvider locale={zhCn}>
      <ReduxContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Todo />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="users" element={<UserList />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ReduxContext.Provider>
    </ConfigProvider>
  );
};
export default Router;
