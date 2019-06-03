import React from "react";
import "./styles.scss";
import logoBmindHolidays from "../../images/logo-bmind-holidays.png";
import PropTypes from "prop-types";

function Header(props) {
  const { selectedUser } = props;
  return (
    <header className="Header">
      <img src={logoBmindHolidays} alt="logo Bmind" className="Header__image" />
      <p className="Header__wellcome">{`Hola, ${selectedUser.name}`}</p>
    </header>
  );
}

Header.propTypes = {
  selectedUser: PropTypes.object.isRequired
};

export default Header;
