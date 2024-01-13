import React, { Suspense, useState, useEffect, lazy, memo } from 'react';
import PropTypes from 'prop-types';
import { apiService } from '../../services/apiService';
import './index.css';

const Input = lazy(() => import('../Input'));
const Button = lazy(() => import('../Button'));
const Select = lazy(() => import('../Select'));

const Modal = ({ isOpen, onClose, data, onSubmit, type }) => {
  const [formData, setFormData] = useState(data);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  console.log(formData);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const fetchedAlbums = await apiService.getAlbums();
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
        const fetchedArtists = await apiService.getArtists();
        setArtists(
          fetchedArtists.map((artist) => ({
            id: artist._id,
            title: artist.name,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchArtists();
    fetchAlbums();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const renderContent = () => {
    switch (type) {
      case 'artist':
        return (
          <>
            <Input
              label="Artist Name"
              name="name"
              value={formData.title || ''}
              onChange={handleChange}
            />
          </>
        );
      case 'album':
        return (
          <>
            <Input
              label="Album Title"
              name="title"
              value={formData.title || ''}
              onChange={handleChange}
            />
            <Select
              label="Artist"
              name="artistId"
              options={artists}
              value={formData.artistId || ''}
              onChange={handleChange}
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
              options={artists}
              value={formData.artistId || ''}
              onChange={handleChange}
            />
            <Select
              label="Album"
              name="albumId"
              options={albums}
              value={formData.albumId || ''}
              onChange={handleChange}
            />
          </>
        );
      case 'admin':
        return (
          <>
            <Input
              type="email"
              label="Admin email"
              name="email"
              value={formData.artist || ''}
              onChange={handleChange}
            />
          </>
        );
      default:
        return <p>Unknown type</p>;
    }
  };

  if (!isOpen) return null;

  return (
    <Suspense fallback={<div>Chargement des audios...</div>}>
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
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['artist', 'song', 'album']).isRequired,
};

export default memo(Modal);
