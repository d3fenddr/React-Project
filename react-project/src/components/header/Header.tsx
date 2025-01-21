import { ReactElement, useState } from "react";
import styles from "./style.module.scss";
import logo from "../../assets/img/logo.svg";
import cart from "../../assets/img/cart.svg";
import menu from "../../assets/img/menu.svg";
import close from "../../assets/img/close.svg";

export default function Header(): ReactElement {
  const [display, setDisplay] = useState<object>({});

  return (
    <>
      <div
        className={styles.navButton}
        onClick={() => setDisplay({ transform: "translate3d(0vw, 0, 0)" })}
      >
        <img src={menu} className={styles.menu} alt="menu" />
      </div>

      <div className={styles.container} style={display}>
        <a href="home">
          <img src={logo} className={styles.logo} alt="logo" />
        </a>
        <div className={styles.headerItems}>
          <a className={styles.headerItem} href="#">
            Breakfast
          </a>
          <a className={styles.headerItem} href="#">
            Lunch
          </a>
          <a className={styles.headerItem} href="#">
            Dinner
          </a>
        </div>
        <img src={cart} className={styles.cart} alt="cart" />
        <div
          className={styles.closeButton}
          onClick={() => setDisplay({ transform: "translate3d(-100vw, 0, 0)" })}
        >
          <img src={close} className={styles.close} alt="close" />
        </div>
      </div>
    </>
  );
}