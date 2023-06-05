import { FC } from "react";
import { useField } from "formik";
import styles from "./formInput.module.scss";

interface FormInputProps extends Partial<React.Component<FormInputProps>> {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
}

const FormInput: FC<FormInputProps> = ({ className, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? `${styles.input} ${styles.input_error} ${className}`
            : `${styles.input} ${className}`
        }
      />
      {meta.error && meta.touched && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </>
  );
};

export default FormInput;
