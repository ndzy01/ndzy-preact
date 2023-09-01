import { Outlet } from 'react-router-dom';
import { useContext } from 'preact/hooks';
import { Button, Layout as AntLayout, Space } from 'antd';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';
import EditTodo from '../component/EditTodo';
import ITag from '../component/Tag';
import Drawer from '../component/Drawer';
import Login from '../component/Login';
import Register from '../component/Register';
import UserList from '../component/UserList';

const { Header, Content } = AntLayout;
const Layout = () => {
  const { signOut } = useTodo();
  const { state } = useContext(ReduxContext);

  return (
    <AntLayout className="ndzy-layout">
      <Header className="ndzy-header">
        <Space className="mb-16">
          {state.user && <div className="sky-blue">{state.user.name}</div>}
          <EditTodo title="新建待办" />
          <ITag title="标签管理" />
          <Drawer title="登陆" btnName="登陆">
            <Login />
          </Drawer>
          <Drawer title="注册" btnName="注册">
            <Register />
          </Drawer>
          {state.user && state.user.role === '0' && (
            <Drawer title="用户管理" btnName="用户管理">
              <UserList />
            </Drawer>
          )}
          <Button type="link" onClick={signOut}>
            登出
          </Button>
        </Space>
      </Header>
      <Content>
        <div className="layout-content p-16">
          <Outlet />
        </div>
      </Content>
    </AntLayout>
  );
};
export default Layout;
