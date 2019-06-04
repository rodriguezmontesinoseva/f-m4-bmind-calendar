import React from 'react';
import './styles.scss';
import Demo from '../YearlyCalendar/Demo';

function Calendar(props) {
  const {
    selectedUser,
    isDisabled,
    loggedUser,
    selectRange,
    selectedRange,
    year,
    selectedDay,
    goToToday,
    onNextYear,
    datePicked,
    onPrevYear,
    rangePicked,
    selectRangeAvailable
  } = props;
  return (
    <div>
      <Demo
        selectedUser={selectedUser}
        isDisabled={isDisabled}
        loggedUser={loggedUser}
        selectRange={selectRange}
        selectedRange={selectedRange}
        year={year}
        selectedDay={selectedDay}
        goToToday={goToToday}
        onNextYear={onNextYear}
        datePicked={datePicked}
        onPrevYear={onPrevYear}
        rangePicked={rangePicked}
        selectRangeAvailable={selectRangeAvailable}
      />
    </div>
  );
}

export default Calendar;
