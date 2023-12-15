import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = ({ label, value, onChange, type = 'text' }) => (
  <div className="input-container">
    {label && <label className="input-label">{label}</label>}
    <input
      type={type}
      className="input-field"
      value={value}
      onChange={onChange}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
