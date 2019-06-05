import React from "react";
import "./styles.scss";

const ValidateButton = props => {
  return (
    <div className="info__container">
      <div className="Main__legend-content">
        <div className="Main__legend-color-approved" />
        <p>Vacaciones aprobadas</p>
        <div className="Main__legend-color-requested" />
        <p>Vacaciones seleccionadas</p>
      </div>
      <div className="info__container__info-button">
      <p className="info__paragraph">{props.isDisabled?'Si quieres elegir tus vacaciones, vuelve a tu usuario':''}</p>
      <button
        className="btn-validate"
        disabled={props.isDisabled}
        onClick={props.handleValidatePeriod}
      >
        Validar
      </button>
      </div>
    </div>
  );
};

export default ValidateButton;
