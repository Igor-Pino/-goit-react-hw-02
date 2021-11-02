import s from './Counter.module.css';
import propTypes from 'prop-types';

function Options({ onGoodBtn, onNeutralBtn, onBadBtn }) {
  return (
    <div>
      <button type="button" onClick={onGoodBtn} className={s.button}>
        Good
      </button>
      <button type="button" onClick={onNeutralBtn} className={s.button}>
        Neutral
      </button>
      <button type="button" onClick={onBadBtn} className={s.button}>
        Bad
      </button>
    </div>
  );
}

Options.propTypes = {
  onGoodBtn: propTypes.func.isRequired,
  onNeutralBtn: propTypes.func.isRequired,
  onBadBtn: propTypes.func.isRequired,
};

export default Options;
