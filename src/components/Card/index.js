import React from 'react';
import './index.css';

const Card = ({ title, image, onClick }) => (
  <div className="card" onClick={onClick}>
    <img src={image} alt={title} className="card-image" />
    <div className="card-title">{title}</div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Card;
