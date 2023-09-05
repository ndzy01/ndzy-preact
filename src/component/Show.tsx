import { useSetState } from 'ahooks';
import Preview from './Preview';

const Show = (props: any) => {
  const [state, setState] = useSetState({ show: false });
  return (
    <div className="w-100">
      <div className="w-100">
        {props.show}
        <p style={{ height: 16, margin: 0 }} onClick={() => setState({ show: !state.show })}></p>
      </div>
      {state.show && <Preview value={props.detail} />}
    </div>
  );
};
export default Show;
