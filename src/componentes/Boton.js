import React from 'react';
import '../hojas-estilos/Boton.css';

function Boton(props) {

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    return (
        <div
            className={`container-btn ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
            onClick={() => props.click(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;