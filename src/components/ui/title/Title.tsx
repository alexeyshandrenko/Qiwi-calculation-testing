import { FC } from "react";
import styles from "./title.module.scss";

interface TitleProps {
  content: string;
  className?: string;
}

const Title: FC<TitleProps> = ({ content, className }) => {
  return <h2 className={`${styles.title} ${className}`}>{content}</h2>;
};

export default Title;
