import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ModalAdd = ({ isOpen, onClose, onSubmit, type }) => {
  const [formData, setFormData] = useState({});
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          {Object.entries(getFormFields(type, artists, albums)).map(
            ([key, value]) => (
              <div key={key}>
                <label>{value.label}</label>
                {value.type === 'select' ? (
                  <select
                    name={key}
                    value={formData[key] || ''}
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    {value.options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.title}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={value.type}
                    name={key}
                    value={formData[key] || ''}
                    onChange={handleChange}
                  />
                )}
              </div>
            )
          )}
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

ModalAdd.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['artist', 'song', 'album', 'admin']).isRequired,
};

export default ModalAdd;

function getFormFields(type, artists, albums) {
  switch (type) {
    case 'artist':
      return {
        title: { label: 'Name', type: 'text' },
      };
    case 'song':
      return {
        title: { label: 'Title', type: 'text' },
        duration: { label: 'Duration', type: 'text' },
        artist: { label: 'Artist', type: 'select', options: artists },
        // Add more song-specific fields here
      };
    case 'album':
      // Define fields for album
      return {
        title: { label: 'Album Title', type: 'text' },
        artist: { label: 'Artist', type: 'select', options: artists },
        // Add other album-specific fields as needed
      };
    default:
      return {};
  }
}
