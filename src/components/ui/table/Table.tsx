import { IInput } from "@/types/input.interface";
import styles from "./table.module.scss";
import { FC } from "react";

interface TableProps {
  handleSort?: () => void;
  sortOrder?: "asc" | "desc";
  inputFields: IInput[];
  filteredInputFields?: IInput[] | null;
  isSorting: boolean;
  addGreen?: boolean;
}

const Table: FC<TableProps> = ({
  handleSort,
  sortOrder,
  inputFields,
  filteredInputFields,
  isSorting,
  addGreen,
}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table__tr}>
          <th>ID</th>
          <th>
            Value{" "}
            {isSorting && (
              <button className={styles.table__button} onClick={handleSort}>
                {sortOrder === "asc" ? "▲" : "▼"}
              </button>
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {!filteredInputFields
          ? inputFields.map((row) => (
              <tr className={styles.table__tr} key={row.id}>
                <td className={styles.table__td}>{row.id}</td>
                <td
                  className={
                    addGreen && parseInt(row.value) > 10
                      ? `${styles.table__td} ${styles.table__td_green}`
                      : styles.table__td
                  }
                >
                  {row.value}
                </td>
              </tr>
            ))
          : filteredInputFields.map((row) => (
              <tr className={styles.table__td} key={row.id}>
                <td className={styles.table__td}>{row.id}</td>
                <td className={styles.table__td}>{row.value}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};

export default Table;
