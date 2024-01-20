import React, { Suspense, useState, useEffect, lazy, memo } from 'react';
import PropTypes from 'prop-types';
import { apiService } from '../../services/apiService';
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
    const fetchAlbums = async () => {
      try {
        const fetchedAlbums = await apiService.getAllAlbums();
        const transformedAlbums = fetchedAlbums.map((album) => {
          return {
            id: album._id,
            title: album.title,
          };
        });
        setAlbums(transformedAlbums);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchArtists = async () => {
      try {
        const fetchedArtists = await apiService.getAllArtists();
        const transformedArtists = fetchedArtists.map((artist) => {
          return {
            id: artist._id,
            title: artist.name,
          };
        });
        setArtists(transformedArtists);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArtists();
    fetchAlbums();
  }, []);

  useEffect(() => {
    if (actionType !== 'add') {
      setFormData(data);
    }
  }, [data, actionType]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
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

  const formatYearToDate = (year) => {
    return year ? `01-01-${year}` : '';
  };

  const renderContent = () => {
    if (actionType === 'delete') {
      return (
        <>
          <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
        </>
      );
    }
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
              options={[{ id: '', title: 'Sélectionner...' }, ...artists]}
              value={formData.artistId || ''}
              onChange={handleChange}
              required
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
              name="releaseDate"
              value={formData.releaseDate || ''}
              onChange={handleChange}
              min="1900"
              max="2099"
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
              label="Artist"
              name="artistId"
              options={[{ id: '', title: 'Sélectionner...' }, ...artists]}
              value={formData.artistId || ''}
              onChange={handleChange}
            />
            <Select
              label="Album"
              name="albumId"
              options={[{ id: '', title: 'Sélectionner...' }, ...albums]}
              value={formData.albumId || ''}
              onChange={handleChange}
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
              label="Username"
              name="title"
              value={formData.title || ''}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Mot de passe"
              name="password"
              value={''}
              onChange={handleChange}
            />
          </>
        );
      default:
        return <p>Action impossible</p>;
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
  type: PropTypes.oneOf(['artist', 'song', 'album']).isRequired,
  actionType: PropTypes.oneOf(['update', 'delete', 'add']).isRequired,
};

export default memo(Modal);
