import { Button, Form, Input } from 'antd';
import { useContext } from 'preact/hooks';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';
import { formItemLayout, buttonItemLayout } from '../utils';

const Register = ({ onClose }: any) => {
  const { register } = useTodo();
  const { state } = useContext(ReduxContext);
  return (
    <Form {...formItemLayout} name="register" onFinish={(values: any) => register(values, onClose)} scrollToFirstError>
      <Form.Item
        name="nickname"
        label="昵称"
        rules={[{ required: true, message: '请输入你的昵称!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
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
      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '请再次输入密码!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次密码不匹配!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button loading={state.loading} type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;
