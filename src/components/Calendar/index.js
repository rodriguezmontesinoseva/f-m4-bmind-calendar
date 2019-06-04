import React from 'react';
import './styles.scss';
import Demo from '../YearlyCalendar/Demo';

function Calendar(props){
    const {selectedUser , isDisabled} = props;
    return (
        <div>
                <Demo selectedUser={selectedUser} isDisabled={isDisabled}/>
        </div>
    )
}

export default Calendar;