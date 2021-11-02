import React from 'react';
import s from './Counter.module.css';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1 className={s.title}>Please leave feedback</h1>
      </div>
    );
  }
}

export default Counter;
