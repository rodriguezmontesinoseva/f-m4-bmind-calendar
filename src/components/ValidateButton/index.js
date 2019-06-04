import React from 'react';
import './styles.scss';

const ValidateButton = (props) => {
    return (
        <div className="info__container">
        <p className="info__paragraph">Delivered information</p>
        <button className="btn-validate" disabled={props.isDisabled} onClick={e=> console.log(e)}>Validar</button>
        </div>
     );
}
 
export default ValidateButton;