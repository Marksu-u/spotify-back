export default Input = ({ label, type, value, onChange }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};
