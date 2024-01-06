import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  name,
  placehodler,
}) => (
  <div className="input-group">
    {label && <label className="input-label">{label}</label>}
    <input
      type={type}
      className="input-field"
      placehodler={placehodler}
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placehodler: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default React.memo(Input);
