import React from 'react';
import './styles.scss';
import PropTypes from "prop-types";
import moment from 'moment';

function UserHoliday(props) {
  const { selectedUser } = props;
  const totalDays = parseInt(selectedUser.vacation_days[moment().year()]);
  const usedDays = parseInt(selectedUser.vacations_used[moment().year()]);
  const daysLeft = totalDays - usedDays;
  return (
    <div className='info-holidays'>
       Información sobre las vacaciones de este año de <span className="bold-name">{selectedUser.name}</span> :
      <ul className='info-holidays__days'>
        <li>Vacaciones totales: {selectedUser.vacation_days[moment().year()] || '0'}</li>
        <li>Vacaciones usadas: {selectedUser.vacations_used[moment().year()] || '0'}</li>
        <li>
          Vacaciones disponibles: {daysLeft || '0'}
        </li>
      </ul>
    </div>
  );
}

UserHoliday.propTypes = {
  selectedUser: PropTypes.object.isRequired
};

export default UserHoliday;
