import { Button, Form, Input } from 'antd';
import { useContext } from 'preact/hooks';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';
import { formItemLayout, buttonItemLayout } from '../utils';

const Login = () => {
  const { login } = useTodo();
  const { state } = useContext(ReduxContext);
  return (
    <Form {...formItemLayout} name="login" onFinish={login} scrollToFirstError>
      <Form.Item name="mobile" label="手机号" rules={[{ required: true, message: '请输入你的手机号!' }]}>
        <Input className="w-100" />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button loading={state.loading} type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
