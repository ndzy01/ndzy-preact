import { useMount, useVirtualList } from 'ahooks';
import { Button, Space, Popconfirm, Spin } from 'antd';
import { useContext, useRef } from 'preact/hooks';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';
import View from '../component/View';
import EditTodo from '../component/EditTodo';
import Drawer from '../component/Drawer';
import Show from '../component/Show';

const Todo = () => {
  const { state } = useContext(ReduxContext);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [list] = useVirtualList(state.list, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 60,
    overscan: 10,
  });
  const { initUser, initTags, getAllTodo, finishTodo, delTodo, recoverTodo } = useTodo();
  useMount(() => {
    initUser();
    initTags();
    getAllTodo();
  });

  return (
    <div>
      <div className="center">{state.loading && <Spin />}</div>
      {list.length === 0 && <div className="center">暂无待办事项</div>}
      <div ref={containerRef} style={{ height: window.innerHeight / 2, overflow: 'auto' }}>
        <div ref={wrapperRef}>
          {list.map((ele) => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #e8e8e8',
                marginBottom: 8,
              }}
              key={ele.data.id}
            >
              <Show
                detail={ele.data.detail}
                show={
                  <div className="between w-100">
                    <div>{ele.data.name}</div>
                    <div>
                      {ele.data.isFinish === 0 ? (
                        <Space>
                          <View {...ele.data} />
                          <span style={{ color: 'red' }}>处理中</span>
                          <Drawer title="编辑" btnName="编辑" {...ele.data}>
                            <EditTodo />
                          </Drawer>
                          <Button type="link" onClick={() => finishTodo(ele.data)}>
                            完成
                          </Button>
                        </Space>
                      ) : ele.data.isFinish === 1 ? (
                        <Space>
                          <View {...ele.data} />
                          <span style={{ color: 'green' }}>已完成</span>
                          <Button type="link" onClick={() => recoverTodo(ele.data)}>
                            恢复
                          </Button>
                          <Popconfirm title="删除将无法恢复,确定删除?" onConfirm={() => delTodo(ele.data)}>
                            <Button type="link"> 删除</Button>
                          </Popconfirm>
                        </Space>
                      ) : null}
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Todo;
