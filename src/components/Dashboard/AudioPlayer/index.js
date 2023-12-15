import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { apiService } from '../../../services/apiService';
import './index.css';

const AudioPlayer = ({ audioId }) => {
  const [audioSrc, setAudioSrc] = useState('');

  useEffect(() => {
    const fetchStreamingUrl = async () => {
      try {
        if (audioId) {
          const response = await apiService.streamAudio(audioId);
          setAudioSrc(response.streamingUrl);
        }
      } catch (error) {
        console.error('Erreur lors du streaming de l’audio', error);
      }
    };
    fetchStreamingUrl();
  }, [audioId]);

  const audioElement = useMemo(() => {
    if (!audioSrc) return null;
    return <audio controls src={audioSrc} autoPlay />;
  }, [audioSrc]);

  if (!audioSrc) return null;

  return <div className="audio-player">{audioElement}</div>;
};

AudioPlayer.propTypes = {
  audioId: PropTypes.string.isRequired,
};

export default AudioPlayer;
