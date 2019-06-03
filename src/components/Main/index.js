import React, {Fragment} from 'react';
import './styles.scss';
import UserHoliday from '../UserHoliday';
import Calendar from '../Calendar';
import Select from '../Select';

function Main(props){
    return (
        <main>
            Main
            <UserHoliday />
            <Select />
            <Calendar selectedUser={props.selectedUser}/>    
        </main>
    )
}

export default Main;