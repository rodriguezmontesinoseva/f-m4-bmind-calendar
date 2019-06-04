import React, { Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import PropTypes from "prop-types";


function HomePage(props) {
  const {
    selectedUser,
    usersData,
    handlerChangeSelect,
    loggedUser,
    handlerChangeTeam,
    teams } = props;

  return (
    <Fragment>
      <Header loggedUser={loggedUser} />
      <Main
        selectedUser={selectedUser}
        usersData={usersData}
        handlerChangeSelect={handlerChangeSelect}
        handlerChangeTeam={handlerChangeTeam}
        teams={teams} />
      <Footer />
    </Fragment>
  );
}

HomePage.propTypes = {
  selectedUser: PropTypes.object.isRequired
};

export default HomePage;
