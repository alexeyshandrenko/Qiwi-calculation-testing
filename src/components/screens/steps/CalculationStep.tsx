import { FC } from "react";
import styles from "./steps.module.scss";
import Title from "@/components/ui/title/Title";
import Loop from "@/components/ui/loop/Loop";

interface CalculationStepProps {
  loading: boolean;
}

const CalculationStep: FC<CalculationStepProps> = ({ loading }) => {
  return (
    <div className={styles.loading}>
      {loading ? (
        <>
          <Title content="Проводится вычисление" />
          <Loop />
        </>
      ) : (
        <Title content="Вычисление выполнено. Переход на новый шаг" />
      )}
    </div>
  );
};

export default CalculationStep;
