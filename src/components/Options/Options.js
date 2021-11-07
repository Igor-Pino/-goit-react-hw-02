import s from '../Style.module.css';
import propTypes from 'prop-types';

function Options({ options, onBtnClick }) {
  return (
    <div>
      {options.map(option => (
        <button className={s.button} type="button" key={option} onClick={() => onBtnClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

Options.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onBtnClick: propTypes.func.isRequired,
};

export default Options;
