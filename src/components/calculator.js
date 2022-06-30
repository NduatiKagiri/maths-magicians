import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <table>
          <div className="answerBox">
            <p>0</p>
          </div>
          <tr>
            <td>AC</td>
            <td>+/-</td>
            <td>%</td>
            <td>÷</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>×</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
          </tr>
          <tr>
            <td id="zero">0</td>
            <td>.</td>
            <td>=</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
