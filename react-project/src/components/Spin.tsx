import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import spinImage from "../assets/img/spin.png";
import meals from "../consts/meals";

const Spin = () => {
  const index = useSelector((state: RootState) => state.meals.index);

  const currentMeal = meals[((index % 5) + 5) % 5];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: currentMeal.backgroundColor,
      }}
    >
      <img
        src={spinImage}
        alt="spin"
        style={{
          width: "200px",
          height: "200px",
          transform: `rotate(${index * 36}deg)`,
        }}
      />
      <button
        style={{
          marginTop: "16px",
          backgroundColor: currentMeal.textColor,
          color: "#fff",
          border: "none",
          padding: "10px 16px",
          cursor: "pointer",
        }}
      >
        Spin Again
      </button>
    </div>
  );
};

export default Spin;