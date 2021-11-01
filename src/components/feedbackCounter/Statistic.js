import React from 'react';
import s from './Counter.module.css';

function Statistic() {
  return (
    <div>
      <h2 className={s.statisticTitle}>Statistic</h2>
      <p>
        <span className={s.score}>Good:</span>
        <span className={s.amount}>0</span>
      </p>
      <p>
        <span className={s.score}>Neutral:</span>
        <span className={s.amount}>0</span>
      </p>
      <p>
        <span className={s.score}>Bad:</span>
        <span className={s.amount}>0</span>
      </p>
      <p>
        <span className={s.score}>Total:</span>
        <span className={s.amount}>0</span>
      </p>
      <p>
        <span className={s.score}>Positiv feedback:</span>
        <span className={s.amount}>0%</span>
      </p>
    </div>
  );
}

export default Statistic;
