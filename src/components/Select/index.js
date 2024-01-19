import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Select = ({ options, value, onChange, name, label, placeholder }) => {
  return (
    <div className="select-group">
      {label && <label htmlFor={name}>{label}</label>}
      <select name={name} value={value} onChange={onChange}>
        {placeholder && <option value="">{placeholder}</option>}
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
          ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default memo(Select);
