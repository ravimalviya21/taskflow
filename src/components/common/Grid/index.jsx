import './index.css';

const Grid = ({ children, columns = 12, minColWidth, gap, padding, margin }) => {
  const gridTemplateColumns = minColWidth
    ? `repeat(auto-fill, minmax(${minColWidth}, 1fr))`
    : `repeat(${columns}, minmax(0, 1fr))`;

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns, gap, padding, margin }}
    >
      {children}
    </div>
  );
}

export default Grid;
