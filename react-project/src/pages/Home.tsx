import Header from "../components/header/Header";
import FoodInfo from "../components/foodInfo/FoodInfo";
import Spin from "../components/spin";

import styles from "../App.module.scss";

const Home = () => {
  return (
    <div className={styles.App}>
      <Header />
      <FoodInfo />
      <Spin />
    </div>
  );
};

export default Home;