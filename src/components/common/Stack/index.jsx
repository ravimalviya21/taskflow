import './index.css';

const Stack = ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  gap,
  padding,
  margin,
}) => {
  return (
    <div
      className="stack"
      style={{ justifyContent, alignItems, gap, padding, margin }}
    >
      {children}
    </div>
  );
}

export default Stack;
