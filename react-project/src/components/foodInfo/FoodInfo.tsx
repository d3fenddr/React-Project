import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import meals from "../../consts/meals";
import styles from "./style.module.scss"

const FoodInfo = () => {
  const index = useSelector((state: RootState) => state.meals.index);
  const validIndex = Number.isNaN(index) ? 0 : index;
  const currentMeal = meals[((validIndex % meals.length) + meals.length) % meals.length];

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: currentMeal.backgroundColor,
      }}
    >
      <h2 className={styles.mealName} style={{ color: currentMeal.textColor }}>
        {currentMeal.name}
      </h2>
      <p className={styles.mealInfo}>{currentMeal.information}</p>
      <button
        className={styles.orderButton}
        style={{
          backgroundColor: currentMeal.textColor,
          color: "#fff",
        }}
      >
        Order Now
      </button>
    </div>
  );
};

export default FoodInfo;
