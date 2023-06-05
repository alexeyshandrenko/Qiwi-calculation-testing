import { useState, FC, useEffect } from "react";
import StepsWrapper from "./StepsWrapper";
import { IInput } from "@/types/input.interface";
import styles from "./steps.module.scss";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import Table from "@/components/ui/table/Table";

interface ConfirmStepProps {
  inputFields: IInput[];
  setInputFields: React.Dispatch<React.SetStateAction<IInput[]>>;
}

const ConfirmStep: FC<ConfirmStepProps> = ({ inputFields, setInputFields }) => {
  useEffect(() => {
    handleSort();
  }, []);

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filterValue, setFilterValue] = useState("");
  const [filteredInputFields, setFilteredInputFields] = useState<
    IInput[] | null
  >(null);

  const handleSort = () => {
    const enteredData = !filteredInputFields
      ? inputFields
      : filteredInputFields;
    const sortedData = [...enteredData].sort((a, b) => {
      if (sortOrder === "asc") {
        return parseInt(a.value) - parseInt(b.value);
      } else {
        return parseInt(b.value) - parseInt(a.value);
      }
    });

    if (filteredInputFields) {
      setFilteredInputFields(sortedData);
    } else {
      setInputFields(sortedData);
    }

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterValue(value.replace(/[^0-9]/g, ""));

    const filteredData = inputFields.filter((item) =>
      item.value.includes(value)
    );

    setFilteredInputFields(filteredData);

    if (!filterValue) {
      setFilteredInputFields(null);
    }
  };

  const handleResetFilter = () => {
    setFilterValue("");
    setFilteredInputFields(null);
  };
  return (
    <StepsWrapper title="Вывод чисел">
      <Table
        handleSort={handleSort}
        sortOrder={sortOrder}
        inputFields={inputFields}
        filteredInputFields={filteredInputFields}
        isSorting={true}
      />
      <div className={styles.filter}>
        <Input
          type="number"
          placeholder="Filter by value"
          value={filterValue}
          onChange={handleFilter}
          className={styles.filter__input}
        />
        <Button disabled={!filterValue} onClick={handleResetFilter}>
          Сбросить фильтр
        </Button>
      </div>
    </StepsWrapper>
  );
};

export default ConfirmStep;
