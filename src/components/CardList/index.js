import React, { useState, useMemo, lazy, memo, Suspense } from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import Card from '../Card';
import PageControls from '../PageControls';
import Search from '../Search';
// const Card = lazy(() => import('../Card'));
// const PageControls = lazy(() => import('../PageControls'));
// const Search = lazy(() => import('../Search'));

const ITEMS_PER_PAGE = 4;

const CardList = ({ items, type }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const titleMatch = item.title
        ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
        : false;
      const artistMatch = item.artist
        ? item.artist.toLowerCase().includes(searchQuery.toLowerCase())
        : false;
      return titleMatch || artistMatch;
    });
  }, [items, searchQuery]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredItems]);

  const renderListItems = useMemo(
    () =>
      currentItems.map((item) => (
        // <Suspense key={item.id} fallback={<Loader />}>
        <Card data={item} type={type} />
        // </Suspense>
      )),
    [currentItems, type]
  );

  const goToPreviousPage = () =>
    setCurrentPage((page) => Math.max(page - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((page) => Math.min(page + 1, totalPages));

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div>
      <div>
        <Search onSearchChange={handleSearchChange} />
      </div>
      <PageControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={goToPreviousPage}
        onNext={goToNextPage}
      />
      {renderListItems}
      <PageControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={goToPreviousPage}
        onNext={goToNextPage}
      />
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.oneOf(['artist', 'song', 'album', 'admin']).isRequired,
};

export default CardList;
