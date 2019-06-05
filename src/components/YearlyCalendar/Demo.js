import React from 'react';
import { Calendar, CalendarControls } from 'react-yearly-calendar';
import ValidateButton from '../ValidateButton';
class Demo extends React.Component {
  constructor(props) {
    super(props);
    // const today = moment();
    this.state = {
      showDaysOfWeek: true,
      showTodayBtn: true,
      showWeekSeparators: true,
      firstDayOfWeek: 1, // monday
      customCSSclasses: {}
    };
  }

  toggleShowDaysOfWeek() {
    this.setState(prevState => ({
      showDaysOfWeek: !prevState.showDaysOfWeek
    }));
  }

  toggleForceFullWeeks() {
    this.setState(prevState => ({
      showDaysOfWeek: true,
      forceFullWeeks: !prevState.forceFullWeeks
    }));
  }

  toggleShowTodayBtn() {
    this.setState(prevState => ({
      showTodayBtn: !prevState.showTodayBtn
    }));
  }

  toggleShowWeekSeparators() {
    this.setState(prevState => ({
      showWeekSeparators: !prevState.showWeekSeparators
    }));
  }

  selectFirstDayOfWeek(event) {
    this.setState({
      firstDayOfWeek: parseInt(event.target.value, 10)
    });
  }

  render() {
    let {
      showTodayBtn,
      showDaysOfWeek,
      forceFullWeeks,
      showWeekSeparators,
      firstDayOfWeek,
      customCSSclasses
    } = this.state;

    const {
      selectedUser,
      isDisabled,
      selectRange,
      selectedRange,
      year,
      selectedDay,
      goToToday,
      onNextYear,
      datePicked,
      onPrevYear,
      rangePicked,
      handleValidatePeriod
    } = this.props;

    customCSSclasses = {};

    for (let period of selectedUser.periods) {
      const name = 'periods ' + period.id;
      customCSSclasses[name] = {
        start: period.start_date,
        end: period.end_date
      };
    }

    return (
      <div>
        <div id='calendar'>
          <CalendarControls
            year={year}
            showTodayButton={showTodayBtn}
            onPrevYear={() => onPrevYear()}
            onNextYear={() => onNextYear()}
            goToToday={() => goToToday()}
          />
          <Calendar
            selectedUser={selectedUser}
            year={year}
            selectedDay={selectedDay}
            showDaysOfWeek={showDaysOfWeek}
            forceFullWeeks={forceFullWeeks}
            showWeekSeparators={showWeekSeparators}
            firstDayOfWeek={firstDayOfWeek}
            selectRange={selectRange}
            selectedRange={selectedRange}
            onPickDate={date => datePicked(date)}
            onPickRange={(start, end) => rangePicked(start, end)}
            customClasses={customCSSclasses}
   
          />
        </div>
        <ValidateButton isDisabled={isDisabled} handleValidatePeriod={handleValidatePeriod} />
      </div>
    );
  }
}

export default Demo;
