import { useSetState } from 'ahooks';
import { Button, Drawer as ADrawer } from 'antd';
import { cloneElement, isValidElement } from 'preact';

const C = ({ children, ...rest }: any) => (isValidElement(children) ? cloneElement(children, { ...rest }) : children);
const Drawer = ({ title, btnName, children, ...rest }: any) => {
  const [state, setState] = useSetState({ open: false });
  return (
    <>
      <Button type="link" onClick={() => setState({ open: true })}>
        {btnName}
      </Button>
      <ADrawer
        destroyOnClose
        open={state.open}
        title={title}
        placement="right"
        width="100%"
        onClose={() => setState({ open: false })}
      >
        <C onClose={() => setState({ open: false })} {...rest}>
          {state && children}
        </C>
      </ADrawer>
    </>
  );
};

export default Drawer;
