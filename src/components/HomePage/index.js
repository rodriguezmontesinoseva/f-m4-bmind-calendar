import React, {Fragment} from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function HomePage(props){
    return (
        <Fragment >
            <Header />
            <Main selectedUser={props.selectedUser}/>
            <Footer />
                Home page
        </Fragment>
    )
}

export default HomePage;