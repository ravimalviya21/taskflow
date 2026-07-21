import './index.css';

const Typography = ({
  as: Tag = 'span',
  variant = 'body-md',
  color,
  align,
  className = '',
  children,
  ...rest
}) => {
  const classes = ['type', `type-${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} style={{ color, textAlign: align }} {...rest}>
      {children}
    </Tag>
  );
}

export default Typography;
