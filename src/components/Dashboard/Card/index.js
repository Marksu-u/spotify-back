import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './index.css';

const DashboardCard = ({ title, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div className="dashboard-card" onClick={handleClick}>
      <h3>{title}</h3>
    </div>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default DashboardCard;
