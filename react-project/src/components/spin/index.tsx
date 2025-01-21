import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import spinImage from "../../assets/img/spin.png";
import meals from "../../consts/meals";
import styles from "./style.module.scss";

import PhotoShown from "./photoShown";
import SpinButton from "./spinButton";

const Spin = () => {
  const index = useSelector((state: RootState) => state.meals.index);
  return (
<>
      <div
        className={styles.container}
        style={{
          backgroundColor: meals[((index % 5) + 5) % 5].backgroundColor,
        }}
      >
        <img
          src={spinImage}
          className={styles.spinImage}
          alt=""
          loading="lazy"
          style={{ transform: `rotate(${index * 36}deg)` }}
        />
      </div>
      <PhotoShown />
      <SpinButton />
    </>
  );
}

export default Spin;
