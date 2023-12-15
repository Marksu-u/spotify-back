import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = ({ label, type, value, onChange }) => (
  <div className="input-container">
    {label && <label>{label}</label>}
    <input type={type} value={value} onChange={onChange} />
  </div>
);

// PropTypes permet de s'assurer que le composant reçoit les bons types de props.
// Pour la prévention des bugs en garantissant que les props passées au composant sont du type attendu
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
