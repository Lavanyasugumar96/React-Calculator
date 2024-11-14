import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(''); 

  
  const append = (char) => {
    setInput((prev) => prev + char);
  };


  const clearDisplay = () => {
    setInput('');
    setResult('');
  };

  // Function to calculate the result
  const calculate = () => {
    try {
      if (input === '') {
        setResult('Error');
      } else {
        // Evaluate the expression
        const evalResult = eval(input); 
        if (evalResult === Infinity) {
          setResult('Infinity');
        } else if (isNaN(evalResult)) {
          setResult('NaN');
        } else {
          setResult(evalResult);
        }
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => append('7')}>7</button>
        <button onClick={() => append('8')}>8</button>
        <button onClick={() => append('9')}>9</button>
        <button onClick={() => append('/')}>/</button>
        <button onClick={() => append('4')}>4</button>
        <button onClick={() => append('5')}>5</button>
        <button onClick={() => append('6')}>6</button>
        <button onClick={() => append('-')}>-</button>
        <button onClick={() => append('1')}>1</button>
        <button onClick={() => append('2')}>2</button>
        <button onClick={() => append('3')}>3</button>
        <button onClick={() => append('*')}>*</button>
        <button onClick={() => append('0')}>0</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => append('+')}>+</button>
      </div>
      
    </div>
  );
};

export default Calculator;