import React, { useState, useMemo, lazy, Suspense } from 'react';
import { notificationService } from '../../services/notificationService';
import { apiService } from '../../services/apiService';
import { addAlbum, addArtist, addAudio } from '../../services/indexerDBService';
import {
  transformAlbums,
  transformAudio,
  transformArtist,
} from '../../services/transformService';
import PropTypes from 'prop-types';

import Loader from '../Loader';
const Card = lazy(() => import('../Card'));
const CardAdd = lazy(() => import('../CardAdd'));
const PageControls = lazy(() => import('../PageControls'));
const Search = lazy(() => import('../Search'));

const ITEMS_PER_PAGE = 4;

const CardList = ({ items, type, onRefresh }) => {
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
    () => (
      <Suspense fallback={<Loader />}>
        {currentItems.map((item) => (
          <Card key={item._id} data={item} type={type} />
        ))}
      </Suspense>
    ),
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

  const handleAddItem = async (newData, type) => {
    try {
      console.log('newData :', newData);
      switch (type) {
        case 'artist':
          await apiService.createArtist(newData);
          const newArtist = await apiService.getLastArtist();
          const artistToAdd = await transformArtist(newArtist);
          await addArtist(artistToAdd);
          break;
        case 'song':
          await apiService.uploadAudio(newData);
          const newAudio = await apiService.getLastAudio();
          const audioToAdd = await transformAudio(newAudio);
          await addAudio(audioToAdd);
          break;
        case 'album':
          await apiService.createAlbum(newData);
          const newAlbum = await apiService.getLastAlbum();
          const albumToAdd = await transformAlbums(newAlbum);
          await addAlbum(albumToAdd);
          break;
        case 'admin':
          await apiService.addAdmin(newData);
          const newAdmin = await apiService.getLastAdmin();
          break;
      }
      notificationService.notify('Ajout réussie', 'success');
      onRefresh();
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'élément :", error);
    }
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
      <CardAdd type={type} onAdd={handleAddItem} />
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
