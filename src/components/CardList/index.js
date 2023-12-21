import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import { apiService } from '../../services/apiService';

const CardList = ({ items, type }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [audioUrl, setAudioUrl] = useState(''); // Nouvel état pour l'URL audio

  const handleCRUD = useCallback(async (action, itemData) => {
    setCurrentItem(itemData);

    switch (action) {
      case 'read':
        try {
          // const streamedAudio = await apiService.streamAudio(itemData.id);
          console.log(itemData.id);
        } catch (error) {
          console.error('Erreur lors du streaming de l’audio', error);
        }
        break;
      case 'update':
        // Logique pour la mise à jour
        break;
      case 'delete':
        // Logique pour la suppression
        break;
      default:
        console.log('Action inconnue');
    }
  }, []);

  const renderListItems = useMemo(
    () =>
      items.map((item) => (
        <Card key={item.id} data={item} type={type} onCRUD={handleCRUD} />
      )),
    [items, type, handleCRUD]
  );

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    setCurrentItem(null);
  }, []);

  return (
    <div>
      {audioUrl && <audio src={audioUrl} controls autoPlay />}
      {renderListItems}
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.oneOf(['artist', 'song', 'album', 'admin']).isRequired,
};

export default React.memo(CardList);
