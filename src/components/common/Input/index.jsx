import { useId } from 'react';
import Typography from '../Typography';
import './index.css';

const Input = ({
  label,
  value,
  defaultValue,
  onChange,
  error,
  padding,
  margin,
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
        className={['input-field', error ? 'input-field-error' : '']
          .filter(Boolean)
          .join(' ')}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
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
