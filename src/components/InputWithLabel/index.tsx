import React from 'react';
import styles from './style.module.css';
import { InputWithLabelProps } from './types';

const InputWithLabel = ({
  id,
  value,
  type='text',
  onInputChange,
  isFocused,
  children
}: InputWithLabelProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        className={styles.input}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};

export default InputWithLabel;