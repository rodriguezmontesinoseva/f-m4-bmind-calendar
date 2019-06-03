import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';

const propTypes = {
  classes: PropTypes.string,
  day: momentObj
};

const defaultProps = {
  classes: '',
  day: null
};

class Day extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onHover = this.onHover.bind(this);
  }

  onClick() {
    const { dayClicked, day } = this.props;
    dayClicked(day);
  }

  onHover() {
    const { dayHovered, day } = this.props;
    dayHovered(day);
  }

  render() {
    const { classes, day } = this.props;
    return (
      <td className={classes}>
        <span className="day-number">{day === null ? '' : day.date()}</span>
      </td>
    );
  }
}

Day.propTypes = propTypes;
Day.defaultProps = defaultProps;

export default Day;