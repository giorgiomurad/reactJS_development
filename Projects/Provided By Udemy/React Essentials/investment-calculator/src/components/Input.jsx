import PropTypes from 'prop-types';

function Input({ label, name, value, onChange }) {
  return (
  <div className='input-section'>
    <label htmlFor='value'>{label}</label>
    <input id="value" type="number" name={name} value={value} onFocus={event => event.target.select()} onChange={onChange} />
  </div>
  );
}

Input.propTypes = {
  label:    PropTypes.string,
  name:     PropTypes.string,
  value:    PropTypes.number,
  onChange: PropTypes.func
}

export default Input;