import React from "react";
import "./styles.scss";

const ValidateButton = props => {
  return (
    <div className="info__container">
      <div className="Main__legend-content">
        <div className="Main__legend-color-approved" />
        <p>Vacaciones aprobadas</p>
        <div className="Main__legend-color-requested" />
        <p>Vacaciones solicitadas</p>
      </div>
      <div className="info__container__info-button">
      <p className="info__paragraph">Delivered information</p>
      <button
        className="btn-validate"
        disabled={props.isDisabled}
        onClick={e => console.log(e)}
      >
        Validar
      </button>
      </div>
    </div>
  );
};

export default ValidateButton;
