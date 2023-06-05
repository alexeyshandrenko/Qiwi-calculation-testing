import { IInput } from "@/types/input.interface";
import { FC } from "react";
import StepsWrapper from "./StepsWrapper";
import Table from "@/components/ui/table/Table";
import Title from "@/components/ui/title/Title";
import { calculateNumbers } from "@/utils/functions";

interface ResultStepProps {
  inputFields: IInput[];
}

const ResultStep: FC<ResultStepProps> = ({ inputFields }) => {
  return (
    <StepsWrapper>
      <Table addGreen={true} isSorting={false} inputFields={inputFields} />
      <Title content={`Результат: ${calculateNumbers(inputFields)}`} />
    </StepsWrapper>
  );
};

export default ResultStep;
