import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';
import logoBmindHolidaysWhite from "../../images/logo-bmind-holidays-white.png";


function Landing() {
    return (
        <div className="page__container">
            <div className="main__container">
                <div>
                    <img alt="bmind logo" className="main__logo" src={logoBmindHolidaysWhite} />
                </div>
                <main className="login_container">
                    <h1 className="login__title">Login</h1>
                    <form className="login__form">
                        <label htmlFor="name" className="hidden">Emplead@</label>
                        <input id="name" className="form__input" type="text" placeholder="Aryanna Sanford" />
                        <label htmlFor="pasword" className="hidden">Password</label>
                        <input id="password"  className="form__input" type="password" placeholder="Password" />
                        
                        <Link to='/calendar' className="form__link" >
                            <button type="button" className="form__button">Entrar</button>
                        </Link>
                    </form>
                </main>
            </div>

        </div>
    )
}

export default Landing;