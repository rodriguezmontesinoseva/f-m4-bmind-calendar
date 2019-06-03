import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  year: PropTypes.number.isRequired,
  onPrevYear: PropTypes.func,
  onNextYear: PropTypes.func,
};

const defaultProps = {
  onPrevYear: undefined,
  onNextYear: undefined,
};

const CalendarControls = props => {
  const { year, onPrevYear, onNextYear } = props;
 
  return (
    <div className="calendar-controls">
      <div className="control" onClick={() => onPrevYear()}>
        &laquo;
      </div>
      <div className="current-year">{year}</div>
      <div className="control" onClick={() => onNextYear()}>
        &raquo;
      </div>

    </div>
  );
};

CalendarControls.propTypes = propTypes;
CalendarControls.defaultProps = defaultProps;

export default CalendarControls;