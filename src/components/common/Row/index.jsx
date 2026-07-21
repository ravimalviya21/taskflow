import './index.css';

const Row = ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'center',
  gap,
  padding,
  margin,
}) => {
  return (
    <div
      className="row"
      style={{ justifyContent, alignItems, gap, padding, margin }}
    >
      {children}
    </div>
  );
}

export default Row;
