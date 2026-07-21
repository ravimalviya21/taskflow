import './index.css';

const Card = ({
  children,
  border,
  borderColor,
  borderRadius,
  padding,
  backgroundColor,
  cursor,
  moreStyle,
  className = '',
  cardRef,
  ...rest
}) => {
  const style = {
    border: border
      ? `1px solid ${borderColor || 'var(--color-outline-variant)'}`
      : 'none',
    borderRadius: borderRadius ? `${borderRadius}rem` : 0,
    padding,
    backgroundColor,
    cursor,
    ...moreStyle,
  };

  return (
    <div
      className={['card', className].filter(Boolean).join(' ')}
      style={style}
      ref={cardRef}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
