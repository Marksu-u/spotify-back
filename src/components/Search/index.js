import React, { useState } from 'react';

const Input = lazy(() => import('../components/Input'));
const Button = lazy(() => import('../components/Button'));

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Recherche effectuée :', searchQuery);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Rechercher..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <Button onClick={handleSearch}>Rechercher</Button>
    </div>
  );
};

export default React.memo(Search);
