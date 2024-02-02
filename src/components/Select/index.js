import React, { useState, lazy, memo } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = lazy(() => import('../Input'));

const Select = ({ options, value, onChange, name, label }) => {
  const handleSelectChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="select-group">
      <label className="select-group">{label}</label>
      <select
        className="select-group"
        name={name}
        value={value}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <option key={option._id} value={option._id}>
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
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default memo(Select);
