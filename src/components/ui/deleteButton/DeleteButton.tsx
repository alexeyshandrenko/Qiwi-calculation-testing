import { ButtonHTMLAttributes, FC } from "react";
import styles from "./deleteButton.module.scss";

interface DeleteButtonProps
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const DeleteButton: FC<DeleteButtonProps> = ({
  children,
  onClick,
  className,
  ...rest
}) => {
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

export default DeleteButton;
