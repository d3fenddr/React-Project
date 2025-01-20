import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import meals from "../consts/meals";

const FoodInfo = () => {
  const index = useSelector((state: RootState) => state.meals.index);
  const indexModule = ((index % 5) + 5) % 5;

  const meal = meals[indexModule];

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        textAlign: "center",
        backgroundColor: meal.backgroundColor,
      }}
    >
      <h2
        style={{
          color: meal.textColor || meal.backgroundColor,
        }}
      >
        {meal.name} - ${meal.price}
      </h2>
      <p>{meal.information}</p>
      <button
        style={{
          backgroundColor: meal.textColor,
          color: "#fff",
          border: "none",
          padding: "10px 16px",
          cursor: "pointer",
          boxShadow: `0px 4px 14px 1px ${meal.textColor}`,
        }}
      >
        Order Now
      </button>
    </div>
  );
};

export default FoodInfo;