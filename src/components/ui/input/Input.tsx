import React, { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface InputProps extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <input
      {...rest}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
    />
  );
};

export default Input;
