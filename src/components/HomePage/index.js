import React, { Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import PropTypes from "prop-types";


function HomePage(props) {
  const { selectedUser, usersData } = props;
  return (
    <Fragment>
      <Header selectedUser={selectedUser} />
      <Main selectedUser={selectedUser} usersData={usersData} />
      <Footer />
    </Fragment>
  );
}

HomePage.propTypes = {
  selectedUser: PropTypes.object.isRequired
};

export default HomePage;
