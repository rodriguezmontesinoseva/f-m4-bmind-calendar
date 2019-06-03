import React, { Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

<<<<<<< HEAD
function HomePage(props){
    return (
        <Fragment >
            <Header />
            <Main selectedUser={props.selectedUser}/>
            <Footer />
                Home page
        </Fragment>
    )
=======
function HomePage(props) {
  const { selectedUser } = props;
  return (
    <Fragment>
      <Header />
      <Main selectedUser={selectedUser} />
      <Footer />
    </Fragment>
  );
>>>>>>> dev
}

export default HomePage;
