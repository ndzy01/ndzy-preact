import { generateUUID } from '../utils';

const Preview = ({ value }: { value: string }) => {
  const id = generateUUID();
  return (
    <div
      style={{ padding: '0 16px' }}
      id={`preview-${id}`}
      className="ndzy-preview"
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
};
export default Preview;
