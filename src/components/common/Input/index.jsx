import { useId } from 'react';
import Typography from '../Typography';
import './index.css';

const Input = ({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  error,
  padding,
  margin,
  ...rest
}) => {
  const inputId = useId();

  return (
    <div className="input" style={{ padding, margin }}>
      {label && (
        <Typography
          as="label"
          variant="label-md"
          htmlFor={inputId}
          className="input-label"
        >
          {label}
        </Typography>
      )}
      <input
        id={inputId}
        type={type}
        name={name}
        placeholder={placeholder}
        className={['input-field', error ? 'input-field-error' : '']
          .filter(Boolean)
          .join(' ')}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        {...rest}
      />
      {error && (
        <Typography
          variant="label-sm"
          id={`${inputId}-error`}
          className="input-error"
        >
          {error}
        </Typography>
      )}
    </div>
  );
}

export default Input;
