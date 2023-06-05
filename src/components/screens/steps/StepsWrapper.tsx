import Title from "@/components/ui/title/Title";
import { FC } from "react";
import styles from "./steps.module.scss";

interface FormWrapperProps {
  title?: string;
  children: React.ReactNode;
}

const StepsWrapper: FC<FormWrapperProps> = ({ title, children }) => {
  return (
    <>
      {title && (
        <Title className={styles.stepsWrapper__title} content={title} />
      )}
      <div className={styles.stepsWrapper}>{children}</div>
    </>
  );
};

export default StepsWrapper;
