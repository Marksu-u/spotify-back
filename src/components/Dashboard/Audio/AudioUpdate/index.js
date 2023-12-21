import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import { apiService } from '../../../../services/apiService';
import './index.css';

const AudioUpdate = ({ audioId, onClose }) => {
  const [audioData, setAudioData] = useState({
    title: '',
    artist: '',
    album: '',
    date: '',
  });

  useEffect(() => {
    if (audioId) {
      apiService
        .getSingleAudio(audioId)
        .then((data) => {
          setAudioData({
            title: data.filename,
            artist: data.metadata.artist.name,
            album: data.metadata.album.title,
            date: data.metadata.date,
          });
        })
        .catch((error) => console.error(error));
    }
  }, [audioId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAudioData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="audio-edit-form">
      <Input
        label="Title"
        name="title"
        value={audioData.title}
        onChange={handleChange}
      />
      <Input
        label="Artist"
        name="artist"
        value={audioData.artist}
        onChange={handleChange}
      />
      <Input
        label="Album"
        name="album"
        value={audioData.album}
        onChange={handleChange}
      />
      <Button type="submit" label="Save Changes" className="submit-button" />
      <Button
        type="button"
        label="Cancel"
        className="cancel-button"
        onClick={onClose}
      />
    </form>
  );
};

AudioUpdate.propTypes = {
  audioId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AudioUpdate;
