import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { images } from "../../assets/img/meals";
import styles from "./style.module.scss";

const PhotoShown = () => {
  const index = useSelector((state: RootState) => state.meals.index);

  return (
    <>
      {images.map((item, i) => {
        return (
          <img
            key={i}
            src={images[i]}
            className={`${styles.photoShown} ${
              ((index % 5) + 5) % 5 === i && styles.startAnimation
            }`}
            alt="spin"
            loading="lazy"
            style={{ opacity: ((index % 5) + 5) % 5 === i ? 1 : 0 }}
          />
        );
      })}
    </>
  );
}

export default PhotoShown;
