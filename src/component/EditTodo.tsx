import { useMount, useSetState } from 'ahooks';
import { Button, Input, Form, Select, DatePicker, Drawer } from 'antd';
import dayjs from 'dayjs';
import { useContext } from 'preact/hooks';
import Editor from '../component/Editor';
import { disabledDate } from '../utils';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';

const EditTodo = (props: any) => {
  const [s, setS] = useSetState({ open: false });
  const { initTags, initUser, createTodo, editTodo } = useTodo();
  const { state } = useContext(ReduxContext);
  const onFinish = (values: any) =>
    props.id
      ? editTodo(values, { id: props.id }, () => setS({ open: false }))
      : createTodo(values, () => setS({ open: false }));
  useMount(() => {
    initUser();
    initTags();
  });
  return (
    <>
      <Button type="link" onClick={() => setS({ open: true })}>
        {props.title}
      </Button>
      <Drawer
        destroyOnClose
        open={s.open}
        title={props.title}
        placement="right"
        width="100%"
        onClose={() => setS({ open: false })}
      >
        <Form
          initialValues={{
            name: props.name,
            deadline: dayjs(props.deadline),
            detail: props.detail,
            link: props.link,
            tagId: props.tagId,
          }}
          preserve={false}
          name="edit"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="名称"
            rules={[
              {
                required: true,
                message: '名称不能为空',
              },
            ]}
          >
            <Input.TextArea rows={1} />
          </Form.Item>
          <Form.Item
            name="deadline"
            label="终止时间"
            rules={[
              {
                required: true,
                message: '终止时间不能为空',
              },
            ]}
          >
            <DatePicker className="w-100" format="YYYY-MM-DD" disabledDate={disabledDate} />
          </Form.Item>
          <Form.Item
            name="detail"
            label="详情"
            rules={[
              {
                required: true,
                message: '详情不能为空',
              },
            ]}
          >
            <Editor />
          </Form.Item>
          <Form.Item name="link" label="链接">
            <Input.TextArea rows={1} />
          </Form.Item>
          <Form.Item
            name="tagId"
            label="标签"
            rules={[
              {
                required: true,
                message: '请选择一个标签',
              },
            ]}
          >
            <Select
              options={state.tags.map((item) => ({ label: `${item.name}-(${item.userName})`, value: item.id }))}
            />
          </Form.Item>
          <Form.Item>
            <Button loading={state.loading} type="primary" htmlType="submit">
              创建
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default EditTodo;
