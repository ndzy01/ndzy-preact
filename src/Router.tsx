import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useReducer } from 'preact/hooks';
import zhCn from 'antd/locale/zh_CN';
import Layout from './pages/Layout';
import Todo from './pages/Todo';
import NoMatch from './pages/NoMatch';
import { initialState, reducer, ReduxContext } from './redux';

const Router = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ConfigProvider locale={zhCn}>
      <ReduxContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/ndzy-preact/" element={<Layout />}>
            <Route index element={<Todo />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ReduxContext.Provider>
    </ConfigProvider>
  );
};
export default Router;
