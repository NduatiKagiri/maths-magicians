import React from 'react';
import PropTypes from 'prop-types';

class Answer extends React.PureComponent {
  render = () => {
    const { answer } = this.props;
    return (
      <div className="answerBox">
        <p>{answer}</p>
      </div>
    );
  }
}

Answer.propTypes = {
  answer: PropTypes.string,
};

Answer.defaultProps = {
  answer: '',
};

export default Answer;
