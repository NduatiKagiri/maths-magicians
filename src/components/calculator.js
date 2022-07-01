import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Answer from './answer';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttonPressed = (buttonValue) => {
    const answer = calculate(state, buttonValue);
    setState(answer);
  };

  const { total, next, operation } = state;
  let myDisplay = `${total}${operation}${next}`.replace(/null/g, '');
  myDisplay = myDisplay.replace(/undefined/g, '');
  const window = myDisplay;

  return (
    <div className="calculator">
      <table>
        <Answer answer={window === '' ? '0' : window} />
        <tr>
          <td><button type="button" onClick={() => buttonPressed('AC')}>AC</button></td>
          <td><button type="button" onClick={() => buttonPressed('+/-')}>+/-</button></td>
          <td><button type="button" onClick={() => buttonPressed('%')}>%</button></td>
          <td><button type="button" onClick={() => buttonPressed('÷')}>÷</button></td>
        </tr>
        <tr>
          <td><button type="button" onClick={() => buttonPressed('7')}>7</button></td>
          <td><button type="button" onClick={() => buttonPressed('8')}>8</button></td>
          <td><button type="button" onClick={() => buttonPressed('9')}>9</button></td>
          <td><button type="button" onClick={() => buttonPressed('x')}>×</button></td>
        </tr>
        <tr>
          <td><button type="button" onClick={() => buttonPressed('4')}>4</button></td>
          <td><button type="button" onClick={() => buttonPressed('5')}>5</button></td>
          <td><button type="button" onClick={() => buttonPressed('6')}>6</button></td>
          <td><button type="button" onClick={() => buttonPressed('-')}>-</button></td>
        </tr>
        <tr>
          <td><button type="button" onClick={() => buttonPressed('1')}>1</button></td>
          <td><button type="button" onClick={() => buttonPressed('2')}>2</button></td>
          <td><button type="button" onClick={() => buttonPressed('3')}>3</button></td>
          <td><button type="button" onClick={() => buttonPressed('+')}>+</button></td>
        </tr>
        <tr>
          <td id="zero"><button type="button" onClick={() => buttonPressed('0')}>0</button></td>
          <td><button type="button" onClick={() => buttonPressed('.')}>.</button></td>
          <td><button type="button" onClick={() => buttonPressed('=')}>=</button></td>
        </tr>
      </table>
    </div>
  );
};

export default Calculator;
