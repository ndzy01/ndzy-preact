import { Tag } from 'antd';
import dayjs from 'dayjs';
import Preview from './Preview';
import Drawer from './Drawer';

const View = (props: any) => {
  return (
    <Drawer title="查看" btnName="查看">
      <Preview value={props.detail} />
      <Tag color="blue">创建人：{props.userName || '--'}</Tag>
      <Tag color="green">标签：{props.tagName || '--'}</Tag>
      <Tag color="red">终止日期：{dayjs(props.deadline).format('YYYY-MM-DD')}</Tag>
      <Tag>创建日期：{dayjs(props.createdAt).subtract(8, 'h').format('YYYY-MM-DD')}</Tag>
      <Tag>更新日期：{dayjs(props.updatedAt).subtract(8, 'h').format('YYYY-MM-DD')}</Tag>
    </Drawer>
  );
};
export default View;
