import React from 'react';
import './styles.scss';

function Landing() {
    return (
        <div className="page__container">
            <div className="main__container">
                <main className="login_container">
                    <h1 className="login__title">Login</h1>
                    <form className="login__form">
                        <label htmlFor="name" className="hidden">Emplead@</label>
                        <input id="name" className="form__input" type="text" placeholder="Aryanna Sanford" />
                        <label htmlFor="pasword" className="hidden">Password</label>
                        <input id="password"  className="form__input" type="password" placeholder="Password" />
                        <button className="form__button" type="button">Entrar</button>
                    </form>
                </main>
            </div>

        </div>
    )
}

export default Landing;