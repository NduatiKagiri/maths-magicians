import React from 'react';

class Quotes extends React.PureComponent {
  render() {
    return (
      <div className="quotes-container">
        <p className="quote">
          Pure mathematics is, in its way, the poetry of logical ideas.
        </p>
        <strong>— Albert Einstein, German theoretical physicist</strong>
        <p className="quote">
          Without mathematics, there’s nothing you can do. Everything around
          you is mathematics. Everything around you is numbers.
        </p>
        <strong> — Shakuntala Devi, Indian writer and mental calculator</strong>
        <p className="quote">
          Mathematics is the most beautiful and most powerful creation of the
          human spirit.
        </p>
        <strong> — Stefan Banach, Polish mathematician</strong>
        <p className="quote">
          We will always have STEM with us. Some things will drop out of the
          public eye and go away, but there will always be science, engineering,
          and technology. And there will always, always be mathematics.
        </p>
        <strong> — Katherine Johnson, African-American mathematician</strong>
        <p className="quote">
          What is mathematics? It is only a systematic effort of solving
          puzzles posed by nature.
        </p>
        <strong> — Shakuntala Devi</strong>
      </div>
    );
  }
}
export default Quotes;
