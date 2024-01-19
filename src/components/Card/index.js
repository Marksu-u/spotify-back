import React, { useState, lazy } from 'react';
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

  const handleDelete = async () => {
    try {
      switch (type) {
        case 'artist':
          await apiService.deleteArtist(data.id);
          break;
        case 'song':
          await apiService.deleteAudio(data.id);
          break;
        case 'album':
          await apiService.deleteAlbum(data.id);
          break;
        case 'admin':
          await apiService.deleteAdmin(data.id);
          break;
        default:
          throw new Error('Unknown type for deletion');
      }
      notificationService.notify('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item:', error);
      notificationService.notify('Error deleting item', 'error');
    }
  };

  const handleEdit = () => {
    onEdit(data);
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
      <Button label="Modifier" onClick={handleEdit} />
      <Button label="Supprimer" onClick={handleDelete} />
    </div>
  );

  return (
    <div className="card" onClick={onClick}>
      {renderContent()}
      {renderCRUDButtons()}
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
