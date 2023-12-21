import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import { apiService } from '../services/apiService';
import './AudioDashboardView.css';

const AudioDashboardView = () => {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    const fetchAudios = async () => {
      try {
        const fetchedAudios = await apiService.getAudios();
        setAudios(
          fetchedAudios.map((audio) => ({
            id: audio._id,
            title: audio.filename,
            artist: audio.metadata.artist.name,
            album: audio.metadata.album.title,
            date: audio.metadata.date,
            genre: audio.metadata.genre.join(', '),
            image: audio.metadata.picture,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchAudios();
  }, []);

  return (
    <div className="audio-dashboard-view">
      <h1>Audio Dashboard</h1>
      <CardList items={audios} type="song" />
    </div>
  );
};

export default AudioDashboardView;
