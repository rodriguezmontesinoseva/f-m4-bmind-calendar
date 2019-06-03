import React from 'react';
import './styles.scss';
import UserHoliday from '../UserHoliday';
import Calendar from '../Calendar';
import Select from '../Select';
import PropTypes from "prop-types";

function Main(props) {
  const { selectedUser } = props;
  return (
    <main className="Main">
      Main
      <UserHoliday selectedUser={selectedUser} />
      <Select />
      <Calendar />
    </main>
  );
}

Main.propTypes = {
  selectedUser: PropTypes.object.isRequired
};

export default Main;
