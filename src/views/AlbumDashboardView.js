import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Card from '../components/Card';
import { apiService } from '../services/apiService';
import './AudioDashboardView.css';

const AlbumDashboardView = () => {
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
            image: convertBufferToImageUrl(audio.metadata.picture),
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchAudios();
  }, []);

  const convertBufferToImageUrl = (pictureData) => {
    let imageSrc = '';
    if (pictureData && pictureData.length > 0) {
      const blob = new Blob([new Uint8Array(pictureData)], {
        type: 'image/jpeg',
      });
      imageSrc = URL.createObjectURL(blob);
    }
    return imageSrc;
  };

  return <div className="audio-dashboard-view">ALBUM</div>;
};

export default AlbumDashboardView;
