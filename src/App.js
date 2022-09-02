import './App.css';

import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Logo from './componentes/Logo';

import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    let currentVal = input + val
    setInput(currentVal);
    
    if((input.charAt(input.length - 1) === val) || (input.charAt(input.length - 1) === val) || (input.charAt(input.length - 1) === val) || (input.charAt(input.length - 1) === val)){
      setInput('');
      alert("No debe ingresar operadores matemáticos seguidos.");
    }
  };

  const result = () => {
    if(input){
      setInput(evaluate(input));
      if(evaluate(input) === Infinity){
        alert("No se pude dividir por 0.");
        setInput('');
      }
    }else {
      alert("Debe ingresar valores para realizar el calculo.");
    }
  };

  return (
    <div className="App">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="calculator-container">
        <Pantalla input={input} />
        <div className="row">
          <Boton click={addInput}>1</Boton>
          <Boton click={addInput}>2</Boton>
          <Boton click={addInput}>3</Boton>
          <Boton click={addInput}>+</Boton>
        </div>
        <div className="row">
          <Boton click={addInput}>4</Boton>
          <Boton click={addInput}>5</Boton>
          <Boton click={addInput}>6</Boton>
          <Boton click={addInput}>-</Boton>
        </div>
        <div className="row">
          <Boton click={addInput}>7</Boton>
          <Boton click={addInput}>8</Boton>
          <Boton click={addInput}>9</Boton>
          <Boton click={addInput}>*</Boton>
        </div>
        <div className="row">
          <Boton click={result}>=</Boton>
          <Boton click={addInput}>0</Boton>
          <Boton click={addInput}>.</Boton>
          <Boton click={addInput}>/</Boton>
        </div>
        <div className="row">
          <BotonClear clickClear={() => setInput('')}>
            AC
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
