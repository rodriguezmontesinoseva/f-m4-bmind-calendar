import React from 'react';
import './styles.scss';
import logoBmindHolidays from '../../images/logo-bmind-holidays.png';
import power from '../../images/power-button-off.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {
  const { loggedUser } = props;
  return (
    <header className='Header'>
      <img src={logoBmindHolidays} alt='logo Bmind' className='Header__image' />
      <div className='user'>
        <Link to='/'>
          <img src={power} alt='Desconectar' title="Desconectar" className='disconected__image' />
        </Link>
        <p className='Header__wellcome'>{`Hola, ${loggedUser.name}`}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  loggedUser: PropTypes.object.isRequired
};

export default Header;
