import React, { Fragment } from 'react';
import './styles.scss';

function UserHoliday(props) {
  return (
    <div className='info-holidays'>
      <ul className='info-holidays__days'>
        <li>Vacaciones totales: 24</li>
        <li>Vacaciones usadas: 12</li>
        <li>Vacaciones disponibles: 12</li>
      </ul>
    </div>
  );
}

export default UserHoliday;
