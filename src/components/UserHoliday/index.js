import React from 'react';
import './styles.scss';
import PropTypes from "prop-types";

function UserHoliday(props) {
  const { selectedUser } = props;
  const totalDays = parseInt(selectedUser.vacation_days);
  const usedDays = parseInt(selectedUser.vacations_used);
  const daysLeft = totalDays - usedDays;
  return (
    <div className='info-holidays'>
      <ul className='info-holidays__days'>
        <li>Vacaciones totales: {selectedUser.vacation_days}</li>
        <li>Vacaciones usadas: {selectedUser.vacations_used}</li>
        <li>
          Vacaciones disponibles: {daysLeft}
        </li>
      </ul>
    </div>
  );
}

UserHoliday.propTypes = {
  selectedUser: PropTypes.object.isRequired
};

export default UserHoliday;
