import { FC } from "react";
import StepsWrapper from "./StepsWrapper";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import styles from "./steps.module.scss";
import { IInput } from "@/types/input.interface";
// import { restrictAlphabets } from "@/utils/functions";

interface InputStepProps {
  inputFields: IInput[];
  setInputFields: React.Dispatch<React.SetStateAction<IInput[]>>;
}

const InputStep: FC<InputStepProps> = ({ inputFields, setInputFields }) => {
  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...inputFields];
    values[index].value = event.target.value.replace(/[^0-9]/g, "");
    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ id: inputFields.length + 1, value: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index: number) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  return (
    <StepsWrapper title="Введите положительные числа">
      {inputFields.map((inputField, index) => (
        <div className={styles.field} key={index}>
          <Input
            className={styles.field__input}
            type="text"
            value={inputField.value}
            onChange={(event) => handleInputChange(index, event)}
          />
          {inputFields.length > 2 && (
            <Button
              className={styles.field__button}
              onClick={() => handleRemoveFields(index)}
            >
              -
            </Button>
          )}
        </div>
      ))}
      <Button onClick={handleAddFields}>Добавить</Button>
    </StepsWrapper>
  );
};

export default InputStep;
