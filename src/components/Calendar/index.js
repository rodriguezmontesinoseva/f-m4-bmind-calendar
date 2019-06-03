import React, {Fragment} from 'react';
import './styles.scss';
import Demo from '../YearlyCalendar/Demo';

function Calendar(props){
    return (
        <div>
                <Demo selectedUser={props.selectedUser}/>
        </div>
    )
}

export default Calendar;