import React, { useState, useCallback, lazy, memo } from 'react';
import PropTypes from 'prop-types';
import { apiService } from '../../services/apiService';
import { notificationService } from '../../services/notificationService';
import './index.css';

const Button = lazy(() => import('../Button'));
const Modal = lazy(() => import('../Modal'));

const Card = ({ type, data, onClick }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [actionType, setActionType] = useState(null);

  const handleCRUD = (actionType) => {
    setCurrentData(data);
    setModalOpen(true);
    setActionType(actionType);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setCurrentData({});
  };

  const handleSubmit = async (updatedData, actionType) => {
    await onSubmit(updatedData, actionType, type);
    setModalOpen(false);
  };

  const onSubmit = async (updatedData, actionType, type) => {
    try {
      console.log('Card data :', updatedData);
      console.log('Type Action :', actionType);
      console.log('Type :', type);
      if (actionType === 'update') {
        switch (type) {
          case 'artist':
            // j'suis claqué j'vois pas pourquoi j'dois faire ça
            const data = {
              id: updatedData.id,
              name: updatedData.title,
            };
            await apiService.editArtist(updatedData.id, data);
            break;
          case 'song':
            await apiService.editAudio(updatedData.id, updatedData);
            break;
          case 'album':
            await apiService.editAlbum(updatedData.id, updatedData);
            break;
        }
        notificationService.notify('Mise à jour réussie', 'success');
      } else if (actionType === 'delete') {
        switch (type) {
          case 'artist':
            await apiService.deleteArtist(updatedData.id);
            break;
          case 'song':
            await apiService.deleteSong(updatedData.id);
            break;
          case 'album':
            await apiService.deleteAlbum(updatedData.id);
            break;
        }
        notificationService.notify('Suppression réussie', 'success');
      }
    } catch (error) {
      console.error("Erreur lors de l'action:", error);
      notificationService.notify("Erreur lors de l'action", 'error');
    }
    setModalOpen(false);
  };

  const renderContent = () => {
    switch (type) {
      /* ------ ARTISTE ------ */
      case 'artist':
        return (
          <div className="card">
            <div className="card-content">
              <div className="card-details">{data.title}</div>
            </div>
          </div>
        );

      /* ------ AUDIO ------ */
      case 'song':
        return (
          <div className="card">
            <div className="card-image">
              <img src={data.image} alt={data.album} />
            </div>
            <div className="card-content">
              <div className="card-title">{data.title}</div>
              <div className="card-details">
                <div>
                  {data.artist} - {data.album}
                </div>
                <div>{data.date}</div>
              </div>
              <div className="card-genre">
                <div>{data.genre}</div>
              </div>
            </div>
          </div>
        );

      /* ------ ALBUM ------ */
      case 'album':
        return (
          <div className="card">
            <div className="card-image">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="card-content">
              <div className="card-title">{data.title}</div>
              <div className="card-details">
                <div>
                  {data.artist} {data.date}
                </div>
              </div>
              <div className="card-genre">
                <div>Genre : {data.genre}</div>
              </div>
            </div>
          </div>
        );

      /* ------ ADMIN ------ */
      case 'admin':
        return (
          <div className="card">
            <div className="card-content">
              <div className="card-title">{data.title}</div>
              <div className="card-details">
                <div>{data.artist}</div>
              </div>
            </div>
          </div>
        );

      /* ------ DEFAULT ------ */
      default:
        return <div>Données non disponibles</div>;
    }
  };

  const renderCRUDButtons = () => (
    <div className="button-container">
      <Button label="Modifier" onClick={() => handleCRUD('update')} />
      <Button label="Supprimer" onClick={() => handleCRUD('delete')} />
    </div>
  );

  return (
    <div className="card" onClick={onClick}>
      {renderContent()}
      {renderCRUDButtons()}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          data={currentData}
          onSubmit={handleSubmit}
          actionType={actionType}
          type={type}
        />
      )}
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(['artist', 'song', 'album', 'admin']),
  title: PropTypes.string,
  image: PropTypes.string,
  data: PropTypes.any,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  onClick: () => {},
};

export default Card;
