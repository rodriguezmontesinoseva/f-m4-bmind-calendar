import React, { Fragment } from 'react';
import './styles.scss';
import UserHoliday from '../UserHoliday';
import Calendar from '../Calendar';
import Select from '../Select';

function Main(props) {
  const { selectedUser } = props;
  return (
    <main>
      Main
      <UserHoliday selectedUser={selectedUser} />
      <Select />
      <Calendar />
    </main>
  );
}

export default Main;
