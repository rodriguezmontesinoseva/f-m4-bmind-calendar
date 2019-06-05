import React, { Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import PropTypes from 'prop-types';

function HomePage(props) {
  const {
    selectedUser,
    usersData,
    handlerChangeSelect,
    loggedUser,
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
    selectRangeAvailable,
    handlerChangeTeam,
    handleValidatePeriod,
    team,
    teamID
  } = props;

  return (
    <Fragment>
      <Header loggedUser={loggedUser} />
      <Main
        selectedUser={selectedUser}
        usersData={usersData}
        handlerChangeSelect={handlerChangeSelect}
        handlerChangeTeam={handlerChangeTeam}
        team={team}
        teamID={teamID}
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
        handleValidatePeriod={handleValidatePeriod}
      />
      <Footer />
    </Fragment>
  );
}

HomePage.propTypes = {
  selectedUser: PropTypes.object.isRequired
};

export default HomePage;
