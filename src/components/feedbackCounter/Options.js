import React from 'react';
import s from './Counter.module.css';

class FeedbackOptions extends React.Component {
  render() {
    return (
      <div>
        <button type="button" className={s.button}>
          Good
        </button>
        <button type="button" className={s.button}>
          Neutral
        </button>
        <button type="button" className={s.button}>
          Bad
        </button>
      </div>
    );
  }
}

//

export default FeedbackOptions;
