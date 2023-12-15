import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './index.css';

const CardList = ({ items }) => (
  <div className="card-list">
    {items.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </div>
);

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList;
