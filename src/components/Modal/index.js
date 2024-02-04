import React, { Suspense, useState, useEffect, lazy, memo } from 'react';
import PropTypes from 'prop-types';
import { getAlbums, getArtists } from '../../services/indexerDBService';
import './index.css';

import Loader from '../Loader';
const Input = lazy(() => import('../Input'));
const Button = lazy(() => import('../Button'));
const Select = lazy(() => import('../Select'));

const Modal = ({ isOpen, onClose, data, onSubmit, type, actionType }) => {
  const [formData, setFormData] = useState(actionType === 'add' ? {} : data);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (actionType !== 'delete') {
      const fetchAlbums = async () => {
        try {
          let albumData = await getAlbums();
          setAlbums(albumData);
        } catch (error) {
          console.error(error);
        }
      };
      const fetchArtists = async () => {
        try {
          let artistData = await getArtists();
          setArtists(artistData);
        } catch (error) {
          console.error(error);
        }
      };
      fetchArtists();
      fetchAlbums();
      setFormData(data);
    }
  }, [data, actionType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeFile = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: null,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderContent = () => {
    if (actionType === 'delete') {
      return (
        <>
          <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
        </>
      );
    } else {
      console.log(formData);
      switch (type) {
        case 'artist':
          return (
            <>
              <Input
                label="Artist Name"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
              />
            </>
          );
        case 'album':
          return (
            <>
              <Input
                label="Titre"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
                required
              />
              <Select
                label="Artiste"
                name="artistId"
                options={artists}
                value={formData.artistId || ''}
                onChange={(selectedArtistId) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    artistId: selectedArtistId,
                  }));
                }}
              />
              <Input
                type="file"
                label="Couverture"
                name="picture"
                onChange={handleChangeFile}
              />
              <Input
                type="number"
                label="Année de sortie"
                name="releaseYear"
                value={
                  formData.releaseDate
                    ? new Date(formData.releaseDate).getFullYear()
                    : ''
                }
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    releaseDate: new Date(e.target.value, 0, 1),
                  });
                }}
                min="1900"
                max={new Date().getFullYear()}
              />
              <Input
                label="Genre"
                name="genre"
                value={formData.genre || ''}
                onChange={handleChange}
              />
            </>
          );
        case 'song':
          return (
            <>
              <Input
                label="Song Title"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
              />
              <Select
                label="Artiste"
                name="artistId"
                options={artists}
                value={formData.artistId || ''}
                onChange={(selectedArtistId) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    artistId: selectedArtistId,
                  }));
                }}
              />
              <Select
                label="Album"
                name="albumId"
                options={albums}
                value={formData.albumId || ''}
                onChange={(selectedAlbumId) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    albumId: selectedAlbumId,
                  }));
                }}
              />
              {actionType === 'add' && (
                <Input
                  type="file"
                  label="Audio File"
                  name="audioFile"
                  onChange={handleChangeFile}
                />
              )}
            </>
          );
        case 'admin':
          return (
            <>
              <Input
                type="email"
                label="Email"
                name="artist"
                value={formData.artist || ''}
                onChange={handleChange}
              />
              <Input
                type="text"
                label="Identifiant"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
              />
              <Input
                type="password"
                label="Confirmer votre mot de passe"
                name="password"
                value={formData.password || ''}
                onChange={handleChange}
                required={true}
              />
            </>
          );
        default:
          return <p>Action impossible</p>;
      }
    }
  };

  if (!isOpen) return null;

  return (
    <Suspense fallback={<Loader />}>
      <div className="modal-backdrop">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            {renderContent()}
            <Button type="submit" label="Valider" />
            <Button type="button" label="Annuler" onClick={onClose} />
          </form>
        </div>
      </div>
    </Suspense>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['artist', 'song', 'album', 'admin']).isRequired,
  actionType: PropTypes.oneOf(['update', 'delete', 'add']).isRequired,
};

export default memo(Modal);
