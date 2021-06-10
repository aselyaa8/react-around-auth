import React, { useRef } from 'react';
import success from '../images/success.svg';
import failed from '../images/union.svg';

function InfoTooltip(props) {


  return (
    <div className={`modal modal-figure modal_opened`}>
      <div className="modal__container">
        <img src={success} />
        <h2 className="form__heading">Success! You have now been registered.</h2>

        <button aria-label="Close" type="button" className="modal__close-button" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
