import { useSetState } from 'ahooks';
import { Button, Space } from 'antd';
import Preview from './Preview';

const Show = (props: any) => {
  const [state, setState] = useSetState({ show: false });
  return (
    <div className="w-100">
      <div className="w-100">
        {props.show}
        <Space>
          <Button type="link" onClick={() => setState({ show: !state.show })}>
            {state.show ? '隐藏' : '展开'}
          </Button>
        </Space>
      </div>
      {state.show && <Preview value={props.detail} />}
    </div>
  );
};
export default Show;
