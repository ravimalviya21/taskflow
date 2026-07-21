import './index.css';

const toSize = (value, fallback) => {
  if (value === undefined || value === null) return fallback;
  return typeof value === 'string' ? value : `${value}%`;
};

const Box = ({
  width,
  height,
  padding,
  children,
  className = '',
  moreStyle,
  boxRef,
  ...rest
}) => {
  const style = {
    width: toSize(width, '100%'),
    height: toSize(height, 'auto'),
    padding,
    ...moreStyle,
  };

  return (
    <div
      className={['box', className].filter(Boolean).join(' ')}
      style={style}
      ref={boxRef}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Box;
