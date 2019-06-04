import React from "react";
import "./styles.scss";
import UserHoliday from "../UserHoliday";
import Calendar from "../Calendar";
import Select from "../Select";
import PropTypes from "prop-types";

function Main(props) {
  const { selectedUser, usersData, handlerChangeSelect, isDisabled } = props;
  return (
    <main className="Main">
      <section className="content-info-filter">
        <UserHoliday selectedUser={selectedUser} />
        <Select
          usersData={usersData}
          handlerChangeSelect={handlerChangeSelect}
          selectedUser={selectedUser}
        />
      </section>
      <Calendar selectedUser={selectedUser} isDisabled={isDisabled} />
      <div className="Main__legend-content">
        <div className="Main__legend-color-approved" />
        <p>Vacaciones aprobadas</p>
        <div className="Main__legend-color-requested" />
        <p>Vacaciones solicitadas</p>
      </div>
    </main>
  );
}

Main.propTypes = {
  selectedUser: PropTypes.object.isRequired
};

export default Main;
