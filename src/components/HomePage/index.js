import React, { Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function HomePage(props) {

    return (
        <Fragment >
            <Header />
            <Main usersData={props.usersData} />
            <Footer />
            Home page
        </Fragment>
    )
}

export default HomePage;