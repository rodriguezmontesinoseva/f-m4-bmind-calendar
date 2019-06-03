import React, { Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function HomePage(props) {
  const { selectedUser } = props;
  return (
    <Fragment>
      <Header />
      <Main selectedUser={selectedUser} />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
