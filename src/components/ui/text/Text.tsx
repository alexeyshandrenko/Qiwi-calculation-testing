import { FC } from "react";
import styles from "./text.module.scss";

interface TextProps {
  content: string;
  className?: string;
}

const Text: FC<TextProps> = ({ content, className }) => {
  return <p className={`${styles.text} ${className}`}>{content}</p>;
};

export default Text;
