import React, { Fragment } from 'react';
import './styles.scss';
import UserHoliday from '../UserHoliday';
import Calendar from '../Calendar';
import Select from '../Select';

function Main(props) {
    const { selectedUser, usersData } = props;
    return (
        <main className="Main">
            Main
      <UserHoliday selectedUser={selectedUser} />
            <Select usersData={usersData} />
            <Calendar />
        </main>
    );
}

export default Main;
