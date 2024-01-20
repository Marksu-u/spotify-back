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

  const handleEdit = () => {
    setModalOpen(true);
    setCurrentData(data);
    setActionType('update');
  };

  const handleDelete = () => {
    handleAction('delete', data);
  };

  const handleSubmit = (editedData) => {
    handleAction(actionType, { ...data, ...editedData });
  };

  const handleAction = async (actionType, editedData) => {
    const actionMap = {
      delete: {
        artist: 'deleteArtist',
        song: 'deleteAudio',
        album: 'deleteAlbum',
        admin: 'deleteAdmin',
      },
      update: {
        artist: 'editArtist',
        song: 'editAudio',
        album: 'editAlbum',
        admin: 'editAdmin',
      },
    };

    const performAction = async (type, data) => {
      const actionFunction = actionMap[actionType][type];
      if (!actionFunction) {
        throw new Error(`Unknown type for ${actionType}`);
      }
      return await apiService[actionFunction](data);
    };

    try {
      const data = actionType === 'delete' ? editedData.id : editedData;
      console.log(`${actionType === 'delete' ? 'Delete' : 'Edit'}: `, data);

      await performAction(type, data);
      notificationService.notify(
        `${
          actionType === 'delete' ? 'Item deleted' : 'Enregistré!'
        } successfully`,
        'success'
      );

      if (actionType !== 'delete') {
        setModalOpen(false);
      }
    } catch (error) {
      console.error(
        `Error ${actionType === 'delete' ? 'deleting' : 'updating'} item:`,
        error
      );
      notificationService.notify(
        `Error ${actionType === 'delete' ? 'deleting' : 'updating'} item`,
        'error'
      );
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
