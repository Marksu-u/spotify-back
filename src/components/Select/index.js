export default Select = ({ label, options, value, onChange }) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  