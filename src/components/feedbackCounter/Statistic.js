import React, { Component } from 'react';
import s from './Counter.module.css';
import Options from './Options';
import Notification from './Notification';

class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodBtn = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onNeutralBtn = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onBadBtn = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const persantage = (this.state.good / this.countTotalFeedback()) * 100;
    return persantage.toFixed();
  };

  render() {
    return (
      <div>
        <Options
          onGoodBtn={this.onGoodBtn}
          onNeutralBtn={this.onNeutralBtn}
          onBadBtn={this.onBadBtn}
        />

        <>
          <h2 className={s.statisticTitle}>Statistic</h2>
        </>

        {this.countTotalFeedback() === 0 && <Notification />}

        {this.countTotalFeedback() !== 0 && (
          <>
            <p>
              <span className={s.score}>Good:</span>
              <span className={s.amount}>{this.state.good}</span>
            </p>
            <p>
              <span className={s.score}>Neutral:</span>
              <span className={s.amount}>{this.state.neutral}</span>
            </p>
            <p>
              <span className={s.score}>Bad:</span>
              <span className={s.amount}>{this.state.bad}</span>
            </p>
            <p>
              <span className={s.score}>Total:</span>
              <span className={s.amount}>{this.countTotalFeedback()}</span>
            </p>
            <p>
              <span className={s.score}>Positiv feedback:</span>
              <span className={s.amount}>{this.countPositiveFeedbackPercentage()}%</span>
            </p>
          </>
        )}
      </div>
    );
  }
}

export default Statistic;
