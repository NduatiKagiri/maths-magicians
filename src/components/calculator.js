import React from 'react';
import calculate from '../logic/calculate';
import Answer from './answer';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.buttonPressed = this.buttonPressed.bind(this);

    this.setState({
      total: null,
      next: null,
      operation: null,
    });
  }

  buttonPressed = (buttonValue) => {
    const answer = calculate(this.state, buttonValue);
    this.setState(answer);
  };

  render() {
    const { total, next, operation } = this.state;
    let myDisplay = `${total}${operation}${next}`.replace(/null/g, '');
    myDisplay = myDisplay.replace(/undefined/g, '');
    const window = myDisplay;

    return (
      <div className="calculator">
        <table>
          <Answer answer={window === '' ? '0' : window} />
          <tr>
            <td><button type="button" onClick={() => this.buttonPressed('AC')}>AC</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('+/-')}>+/-</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('%')}>%</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('÷')}>÷</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={() => this.buttonPressed('7')}>7</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('8')}>8</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('9')}>9</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('x')}>×</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={() => this.buttonPressed('4')}>4</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('5')}>5</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('6')}>6</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('-')}>-</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={() => this.buttonPressed('1')}>1</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('2')}>2</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('3')}>3</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('+')}>+</button></td>
          </tr>
          <tr>
            <td id="zero"><button type="button" onClick={() => this.buttonPressed('0')}>0</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('.')}>.</button></td>
            <td><button type="button" onClick={() => this.buttonPressed('=')}>=</button></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
