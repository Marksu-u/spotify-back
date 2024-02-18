import React from 'react';
import PropTypes from 'prop-types';

const YearPicker = ({ label, name, value, onChange, startYear, endYear }) => {
  const years = [];
  for (let i = endYear; i >= startYear; i--) {
    years.push(i);
  }

  const selectedYear =
    value instanceof Date ? value.getFullYear().toString() : '';

  return (
    <div className="input-group">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        className="input-field"
        value={selectedYear}
        onChange={(e) => {
          onChange(new Date(e.target.value, 0, 1));
        }}
      >
        <option value="">Select a year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

YearPicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.number.isRequired,
};

export default React.memo(YearPicker);
