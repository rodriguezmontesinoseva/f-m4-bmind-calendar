import React from "react";
import "./styles.scss";
import logoBmindHolidays from "../../images/logo-bmind-holidays.png";

function Header(props) {
  return (
    <header className="Header">
      <a href="https://www.bmind.es/es/" target="_blank">
        <img src={logoBmindHolidays} alt="logo Bmind" className="Header__image" />
      </a>
      <p className="Header__wellcome">{`Hola, user1`}</p>
    </header>
  );
}

export default Header;
