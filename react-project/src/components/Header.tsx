import { useState } from "react";
import logo from "../assets/img/logo.svg";
import cart from "../assets/img/cart.svg";
import menu from "../assets/img/menu.svg";
import close from "../assets/img/close.svg";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <img
        src={menu}
        alt="menu"
        style={{ cursor: "pointer" }}
        onClick={() => setMenuVisible(true)}
      />

      {menuVisible && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#222",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <img
            src={close}
            alt="close"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              cursor: "pointer",
            }}
            onClick={() => setMenuVisible(false)}
          />
          <a href="#" style={{ color: "#fff", marginBottom: "16px" }}>
            Breakfast
          </a>
          <a href="#" style={{ color: "#fff", marginBottom: "16px" }}>
            Lunch
          </a>
          <a href="#" style={{ color: "#fff", marginBottom: "16px" }}>
            Dinner
          </a>
        </div>
      )}

      <img src={logo} alt="logo" style={{ height: "40px" }} />
      <img src={cart} alt="cart" style={{ height: "24px", cursor: "pointer" }} />
    </header>
  );
};

export default Header;