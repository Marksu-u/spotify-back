import React, { useState, lazy } from 'react';
import PropTypes from 'prop-types';
import { apiService } from '../../services/apiService';
import { notificationService } from '../../services/notificationService';
import {
  deleteAlbum,
  updateAlbum,
  deleteArtist,
  updateArtist,
  deleteAudio,
  updateAudio,
} from '../../services/indexerDBService';
import {
  transformAlbums,
  transformAudio,
  transformArtist,
} from '../../services/transformService';
import './index.css';

const Button = lazy(() => import('../Button'));
const Modal = lazy(() => import('../Modal'));

const Card = ({ type, data, onClick, onRefresh }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [actionType, setActionType] = useState(null);

  const performUpdate = async (editedData) => {
    try {
      switch (type) {
        case 'song':
          await apiService.editAudio(editedData);
          const editAudio = await apiService.getSingleAudio(editedData._id);
          const audioToEdit = await transformAudio(
            editAudio.audios[0],
            editAudio,
            editAudio.name
          );
          await updateAudio(audioToEdit);
          break;
        case 'artist':
          await apiService.editArtist(editedData);
          const editArtist = await apiService.getSingleArtist(editedData._id);
          const artistToEdit = await transformArtist(editArtist);
          await updateArtist(artistToEdit);
          break;
        case 'album':
          await apiService.editAlbum(editedData);
          const editAlbum = await apiService.getSingleAlbum(editedData._id);
          const albumToEdit = await transformAlbums(editAlbum);
          await updateAlbum(albumToEdit);
          break;
        default:
          console.error(`Unsupported type for update: ${type}`);
      }
      notificationService.notify('Mis à jour', 'success');
      onRefresh();
    } catch (error) {}
  };

  const performDelete = async (editedData) => {
    try {
      switch (type) {
        case 'song':
          await deleteAudio(editedData._id);
          await apiService.deleteSong(editedData._id);
          break;
        case 'album':
          await deleteAlbum(editedData._id);
          await apiService.deleteAlbum(editedData._id);
          break;
        case 'artist':
          await deleteArtist(editedData._id);
          await apiService.deleteArtist(editedData._id);
          break;
        default:
          console.error(`Unsupported type for delete: ${type}`);
      }
      notificationService.notify('Supprimé !', 'success');
      onRefresh();
    } catch (error) {
      notificationService.notify('Erreur', 'warning');
      console.error("Erreur lors de la suppression de l'élément :", error);
    }
  };

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

    try {
      if (actionType === 'update') {
        await performUpdate(editedData);
      } else if (actionType === 'delete') {
        await performDelete(editedData);
      } else {
        notificationService.notify('Unauthorized Action', 'warning');
      }
    } catch (err) {
      console.error(`Error processing ${actionType}:`, err);
      notificationService.notify(`Error processing ${actionType}`, 'error');
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
  onRefresh: PropTypes.func,
};

Card.defaultProps = {
  onClick: () => {},
  onRefresh: () => {},
};

export default Card;
