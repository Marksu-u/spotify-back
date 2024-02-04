import React, { useState, lazy } from 'react';
import PropTypes from 'prop-types';
import { apiService } from '../../services/apiService';
import { notificationService } from '../../services/notificationService';
import {
  deleteAlbum,
  deleteArtist,
  deleteAudio,
} from '../../services/indexerDBService';
import './index.css';

const Button = lazy(() => import('../Button'));
const Modal = lazy(() => import('../Modal'));

const Card = ({ type, data, onClick }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [actionType, setActionType] = useState(null);

  const handleEdit = () => {
    setModalOpen(true);
    setCurrentData(data);
    setActionType('update');
  };

  const handleDelete = () => {
    setModalOpen(true);
    setCurrentData(data);
    setActionType('delete');
  };

  const handleSubmit = async (editedData) => {
    setModalOpen(false);

    switch (actionType) {
      case 'update':
        try {
          await apiService.editItem(type, editedData);
          notificationService.notify('Item updated successfully', 'success');
        } catch (err) {
          console.error('Error updating item:', err);
          notificationService.notify('Error updating item', 'error');
        }
        break;

      case 'delete':
        switch (type) {
          case 'song':
            try {
              await deleteAudio(editedData._id);
              await apiService.deleteSong(editedData._id);
              notificationService.notify(
                'Song deleted successfully',
                'success'
              );
            } catch (err) {
              console.error('Error deleting song:', err);
              notificationService.notify('Error deleting song', 'error');
            }
            break;

          case 'album':
            try {
              await deleteAlbum(editedData._id);
              await apiService.deleteAlbum(editedData._id);
              notificationService.notify(
                'Album deleted successfully',
                'success'
              );
            } catch (err) {
              console.error('Error deleting album:', err);
              notificationService.notify('Error deleting album', 'error');
            }
            break;
          case 'artist':
            try {
              await deleteArtist(editedData._id);
              await apiService.deleteArtist(editedData._id);
              notificationService.notify(
                'Artist deleted successfully',
                'success'
              );
            } catch (err) {
              console.error('Error deleting artist:', err);
            }
            break;
          default:
            // console.warn(`Unhandled type: ${type}`);
            notificationService.notify('Unauthorized', 'warning');
            break;
        }
        break;

      default:
        // console.warn(`Unhandled actionType: ${actionType}`);
        notificationService.notify('Unauthorized Action', 'warning');
        break;
    }
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
              <img src={data.picture} alt={data.album} />
            </div>
            <div className="card-content">
              <div className="card-title">{data.title}</div>
              <div className="card-details">
                <div>
                  {data.artist} - {data.album}
                </div>
                <div>{data.releaseDate}</div>
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
              <img src={data.picture} alt={data.title} />
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
      <Button label="Modifier" onClick={handleEdit} />
      <Button label="Supprimer" onClick={handleDelete} />
    </div>
  );

  return (
    <div className="card" onClick={onClick}>
      {renderContent()}
      {renderCRUDButtons()}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
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
