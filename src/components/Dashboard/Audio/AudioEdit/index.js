import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { apiService } from '../../../../services/apiService';
import { notificationService } from '../../../../services/notificationService';

const AudioEdit = ({ audioId }) => {
  const [audioData, setAudioData] = useState(null);

  useEffect(() => {
    if (audioId) {
      apiService
        .getSingleAudio(audioId)
        .then((data) => setAudioData(data))
        .catch((error) => notificationService.notify(error.message, 'error'));
    }
  }, [audioId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.editAudio(audioId, audioData);
      notificationService.notify('Audio modifié avec succès', 'success');
    } catch (error) {
      notificationService.notify(error.message, 'error');
    }
  };

  if (!audioData) return <div>Chargement...</div>;

  return (
    <form onSubmit={handleSubmit}>
      {/* Créez des champs de formulaire pour éditer les données de l'audio */}
    </form>
  );
};

AudioEdit.propTypes = {
  audioId: PropTypes.string.isRequired,
};

export default AudioEdit;
