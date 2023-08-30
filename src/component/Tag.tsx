// @ts-nocheck
import { useMount, useSetState, useVirtualList } from 'ahooks';
import { useContext, useRef } from 'preact/hooks';
import { Button, Space, Popconfirm, Input, Drawer, Tag } from 'antd';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';

const ITag = (props: any) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [s, setS] = useSetState({ open: false });
  const { inputValue, initTags, delTag, handleCreateTag, setInputValue } = useTodo();
  const { state } = useContext(ReduxContext);
  const [list] = useVirtualList(state.tags, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 60,
    overscan: 10,
  });
  useMount(() => {
    initTags();
  });
  return (
    <div>
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
        <Space.Compact className="w-100">
          <Input placeholder="请输入" value={inputValue} onChange={(e: any) => setInputValue(e.target.value)} />
          <Button loading={state.loading} type="primary" onClick={handleCreateTag}>
            添加
          </Button>
        </Space.Compact>
        <div ref={containerRef} style={{ height: window.innerHeight / 2, overflow: 'auto', marginTop: 16 }}>
          <div ref={wrapperRef}>
            {list.map((ele) => (
              <div
                style={{
                  height: 52,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid #e8e8e8',
                  marginBottom: 8,
                }}
                key={ele.data.id}
              >
                <div className="between w-100">
                  <div className="between">
                    {ele.data.name}
                    {state.user?.role === '0' && (
                      <Popconfirm title="删除将无法恢复,确定删除?" onConfirm={() => delTag(ele.data.id)}>
                        <Button> 删除</Button>
                      </Popconfirm>
                    )}
                  </div>
                  <div>
                    <Space>
                      <Tag>创建人：{ele.data.userName || '--'}</Tag>
                    </Space>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default ITag;
