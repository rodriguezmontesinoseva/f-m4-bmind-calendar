import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import Calendar from './components/YearlyCalendar/Calendar';
import CalendarControls from './components/YearlyCalendar/CalendarControls';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter >
        <App />
    </HashRouter>
, document.getElementById('root'));
export { Calendar, CalendarControls };