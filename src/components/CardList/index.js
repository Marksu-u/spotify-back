import React, { useState, useCallback, useMemo, lazy, memo } from 'react';
import PropTypes from 'prop-types';
import { apiService } from '../../services/apiService';

const Card = lazy(() => import('../Card'));
const Modal = lazy(() => import('../CardList'));
const PageControls = lazy(() => import('../PageControls'));
const Search = lazy(() => import('../Search'));

const ITEMS_PER_PAGE = 5;

const CardList = ({ items, type }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Vérifiez si la propriété 'title' existe et correspond à la requête de recherche.
      const titleMatch = item.title
        ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
        : false;
      // Vérifiez si la propriété 'name' existe et correspond à la requête de recherche.
      const artistMatch = item.artist
        ? item.artist.toLowerCase().includes(searchQuery.toLowerCase())
        : false;
      // Retournez true si l'un des deux correspond à la recherche.
      return titleMatch || artistMatch;
    });
  }, [items, searchQuery]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredItems]);

  const handleCRUD = useCallback(async (action, itemData) => {
    setCurrentItem(itemData);

    switch (action) {
      case 'update':
        setModalOpen(true);
        break;
      case 'delete':
        console.log(itemData.id);
        try {
          const deletedAudio = await apiService.deleteAudio(itemData.id);
        } catch (error) {
          console.error(error);
        }
        break;
      default:
        console.log('Action inconnue');
    }
  }, []);

  const renderListItems = useMemo(
    () =>
      currentItems.map((item) => (
        <Card key={item.id} data={item} type={type} onCRUD={handleCRUD} />
      )),
    [currentItems, type, handleCRUD]
  );

  const goToPreviousPage = () =>
    setCurrentPage((page) => Math.max(page - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((page) => Math.min(page + 1, totalPages));

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    setCurrentItem(null);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // edit à faire
    setModalOpen(false);
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
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          data={currentItem}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.oneOf(['artist', 'song', 'album', 'admin']).isRequired,
};

export default memo(CardList);
