import React from "react";
import "./styles.scss";
import logoBmindHolidays from "../../images/logo-bmind-holidays.png";
import PropTypes from "prop-types";

function Header(props) {
  const { logUser } = props;
  return (
    <header className="Header">
      <img src={logoBmindHolidays} alt="logo Bmind" className="Header__image" />
      <p className="Header__wellcome">{`Hola, ${logUser}`}</p>
    </header>
  );
}

Header.propTypes = {
  logUser: PropTypes.string.isRequired
};

export default Header;
