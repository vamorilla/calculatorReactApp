import React from 'react';
import '../hojas-estilos/BotonClear.css';

const BotonClear = (props) => (
    <div className="btn-clear" onClick={props.clickClear}>
        {props.children}
    </div>
);

export default BotonClear;