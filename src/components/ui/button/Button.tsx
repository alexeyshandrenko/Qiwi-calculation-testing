import { ButtonHTMLAttributes, FC } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className, ...rest }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
