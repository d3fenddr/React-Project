import React, { useEffect } from "react";
import { connect } from "react-redux";
import { incrementIndex, decrementIndex } from "../../redux/mealsSlice";
import ButtonImage from "../../assets/img/button.svg";
import styles from "./style.module.scss";

interface SpinButtonProps {
  incrementIndex: () => void;
  decrementIndex: () => void;
}

const SpinButton: React.FC<SpinButtonProps> = ({ incrementIndex, decrementIndex }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        decrementIndex();
      }
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        incrementIndex();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [decrementIndex, incrementIndex]);

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.buttonStyle} onClick={decrementIndex}>
        <img
          src={ButtonImage}
          className={styles.buttonImage}
          alt="button"
          loading="lazy"
        />
      </div>
      <div className={styles.buttonStyle} onClick={incrementIndex}>
        <img
          src={ButtonImage}
          className={styles.buttonImage}
          alt="button"
          loading="lazy"
        />
      </div>
    </div>
  );
};

// map redux actions to component props
const mapDispatchToProps = {
  incrementIndex,
  decrementIndex,
};

// connect component to redux
export default connect(null, mapDispatchToProps)(SpinButton);
