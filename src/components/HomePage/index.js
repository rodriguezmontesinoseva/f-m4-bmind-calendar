import React, { Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function HomePage(props) {
    const { selectedUser, usersData } = props;
    return (
        <Fragment>
            <Header />
            <Main selectedUser={selectedUser} usersData={usersData} />
            <Footer />
        </Fragment>
    );
}

export default HomePage;
