import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import App from './components/App/App';
import Demo from './components/YearlyCalendar/Demo';
import Calendar from './components/YearlyCalendar/Calendar';
import CalendarControls from './components/YearlyCalendar/CalendarControls';


ReactDOM.render(<Demo />, document.getElementById('root'));
export { Calendar, CalendarControls };