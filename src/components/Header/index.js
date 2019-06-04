import React from "react";
import "./styles.scss";
import logoBmindHolidays from "../../images/logo-bmind-holidays.png";
import PropTypes from "prop-types";

function Header(props) {
  const { loggedUser } = props;
  return (
    <header className="Header">
      <img src={logoBmindHolidays} alt="logo Bmind" className="Header__image" />
      <p className="Header__wellcome">{`Hola, ${loggedUser.name}`}</p>
    </header>
  );
}

Header.propTypes = {
  loggedUser: PropTypes.object.isRequired
};

export default Header;
