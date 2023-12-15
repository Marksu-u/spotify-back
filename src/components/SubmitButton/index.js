import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ label }) => <button type="submit">{label}</button>;

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SubmitButton;
