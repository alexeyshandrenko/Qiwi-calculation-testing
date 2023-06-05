import { Form, Formik } from "formik";
import styles from "./login.module.scss";
import loginBackground from "@assets/images/login-background.jpg";
import Title from "@/components/ui/title/Title";
import FormInput from "@/components/ui/formInput/FormInput";
import { schema } from "@/schemas";
import Button from "@/components/ui/button/Button";
import { useNavigate } from "react-router-dom";
import { IUser } from "@/types/user.interface";
import { useState } from "react";
import UserService from "@/services/UserService";
import userStore from "@/stores/user-store";

const Login = () => {
  const { addValidUser } = userStore;
  const [userNotFound, setUserNotFound] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <main className={styles.login}>
      <div className={styles.left}>
        <img src={loginBackground} alt="login-background" />
      </div>
      <div className={styles.right}>
        <Title className={styles.right__title} content="Войти в аккаунт" />
        <Formik
          initialValues={{ login: "", password: "" }}
          validationSchema={schema}
          onSubmit={async (values: IUser, { setSubmitting }) => {
            const validateUser = await UserService.validateUser(
              values.login,
              values.password
            );
            if (validateUser) {
              localStorage.setItem("user", JSON.stringify(values));
              addValidUser(values);
              navigate("/steps");
            } else {
              setUserNotFound(true);
              setSubmitting(false);
            }
          }}
        >
          {({ isValid, isSubmitting, values }) => (
            <Form className={styles.form}>
              <div className={styles.form__input}>
                <FormInput name="login" type="email" placeholder="Логин" />
              </div>
              <div className={styles.form__input}>
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Пароль"
                />
              </div>
              <Button
                className={styles.button}
                disabled={
                  isSubmitting || !isValid || !values.login || !values.password
                }
                type="submit"
              >
                Подтвердить
              </Button>
              {userNotFound && (
                <p className={styles.error}>Пользователь не найден</p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default Login;
