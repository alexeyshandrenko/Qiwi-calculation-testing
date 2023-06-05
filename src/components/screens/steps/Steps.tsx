import { observer } from "mobx-react-lite";
import userStore from "@/stores/user-store";
import { Navigate } from "react-router-dom";
import { Wrapper } from "@/assets/styles/components";
import styles from "./steps.module.scss";
import Title from "@/components/ui/title/Title";
import Text from "@/components/ui/text/Text";
import { checkInputNumeric, convertEmail } from "@/utils/functions";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import Button from "@/components/ui/button/Button";
import InputStep from "./InputStep";
import ConfirmStep from "./ConfirmStep";
import ResultStep from "./ResultStep";
import CalculationStep from "./CalculationStep";
import { useEffect, useState } from "react";
import { IInput } from "@/types/input.interface";

const Steps = observer(() => {
  const { user } = userStore;
  if (!user) {
    return <Navigate to="/login" />;
  }
  const [inputFields, setInputFields] = useState<IInput[]>([
    { id: 1, value: "" },
    { id: 2, value: "" },
  ]);
  const [loading, setLoading] = useState(true);
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    isLoadingStep,
    back,
    next,
    goToFirstStep,
  } = useMultiStepForm([
    <InputStep inputFields={inputFields} setInputFields={setInputFields} />,
    <ConfirmStep inputFields={inputFields} setInputFields={setInputFields} />,
    <CalculationStep loading={loading} />,
    <ResultStep inputFields={inputFields} />,
  ]);

  useEffect(() => {
    if (currentStepIndex === 2) {
      console.log("loading...");
      const timer = setTimeout(() => {
        setLoading(false);
        next();
        setLoading(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStepIndex]);

  const backToPrevStep = () => {
    setInputFields([
      { id: 1, value: "" },
      { id: 2, value: "" },
    ]);
    back();
  };

  const finishCalculation = () => {
    setInputFields([
      { id: 1, value: "" },
      { id: 2, value: "" },
    ]);
    goToFirstStep();
  };

  return (
    <Wrapper>
      <aside className={styles.aside}>
        <Title
          className={styles.aside__title}
          content={`Привет, ${convertEmail(user.login)}`}
        />
      </aside>
      <main className={styles.content}>
        <Text
          content={`${currentStepIndex + 1} / ${steps.length}`}
          className={styles.content__step}
        />
        {step}
        <div className={styles.content__buttons}>
          {!isFirstStep && !isLoadingStep && (
            <Button
              disabled={isFirstStep}
              onClick={isLastStep ? finishCalculation : backToPrevStep}
            >
              {isLastStep ? "Вернуться к вводу данных" : "Назад"}
            </Button>
          )}
          {!isLastStep && !isLoadingStep && (
            <Button disabled={!checkInputNumeric(inputFields)} onClick={next}>
              Продолжить
            </Button>
          )}
        </div>
      </main>
    </Wrapper>
  );
});

export default Steps;
