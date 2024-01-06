import React, { useState, lazy, memo } from 'react';
import PropTypes from 'prop-types';

const Input = lazy(() => import('../Input'));

const Search = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Rechercher..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        name="search"
      />
    </div>
  );
};

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default memo(Search);
