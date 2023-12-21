import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CardButton = ({ label, onClick }) => (
  <button className="card-button" onClick={onClick}>
    {label}
  </button>
);

CardButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CardButton;
