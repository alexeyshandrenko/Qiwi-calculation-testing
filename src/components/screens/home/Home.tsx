import Title from "@/components/ui/title/Title";
import Text from "@/components/ui/text/Text";
import styles from "./home.module.scss";
import Button from "@/components/ui/button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <main className={styles.home}>
      <div className={styles.description}>
        <Title className={styles.home__title} content="Добро пожаловать!" />
        <Text
          className={styles.home__text}
          content="Наше приложение предоставляет вам удобный способ выполнения операций сложения с несколькими числами. Мы надеемся, что наше приложение поможет вам легко выполнять операции сложения с числами. Наслаждайтесь его использованием!"
        />
      </div>
      <Button className={styles.home__button} onClick={handleClick}>
        Войти
      </Button>
    </main>
  );
};

export default Home;
