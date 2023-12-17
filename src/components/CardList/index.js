import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const List = ({ items, type }) => {
  const renderListItems = () => {
    return items.map((item) => <Card key={item._id} data={item} type={type} />);
  };

  return <div>{renderListItems()}</div>;
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.oneOf(['artist', 'song', 'album', 'admin']).isRequired,
};

export default List;
