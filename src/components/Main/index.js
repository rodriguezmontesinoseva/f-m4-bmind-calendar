import React, {Fragment} from 'react';
import './styles.scss';
import UserHoliday from '../UserHoliday';
import Calendar from '../Calendar';
import Select from '../Select';

function Main(props){
    return (
        <main className="Main">
            Main
            <UserHoliday />
            <Select />
            <Calendar />    
        </main>
    )
}

export default Main;