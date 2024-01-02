import React, { Suspense, lazy, useEffect, useState, memo } from 'react';
import './index.css';
import { apiService } from '../services/apiService';
import { notificationService } from '../services/notificationService';

const CardList = lazy(() => import('../components/CardList'));

const AudioDashboardView = () => {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    const fetchAudios = async () => {
      try {
        const fetchedAudios = await apiService.getAudios();
        console.log(fetchedAudios);
        const transformedAudios = fetchedAudios.map((audio) => {
          return {
            id: audio._id,
            title: audio.filename,
            artist: audio.metadata.artist.name,
            album: audio.metadata.album.title,
            date: audio.metadata.date,
            genre: audio.metadata.genre.join(', '),
            image: convertBufferToImageUrl(audio.metadata.picture[0]),
          };
        });
        setAudios(transformedAudios);
      } catch (error) {
        console.error(error);
      }
    };
    console.log(1);
    fetchAudios();
    notificationService.notify('Audios chargés avec succès', 'success');
  }, []);

  const convertBufferToImageUrl = (picture) => {
    if (picture && picture.data && picture.data.data) {
      const buffer = new Uint8Array(picture.data.data);
      const blob = new Blob([buffer], { type: picture.format });
      return URL.createObjectURL(blob);
    }
    return null;
  };

  return (
    <div className="dashboard-list-view">
      <h2>Audio Dashboard</h2>
      <Suspense fallback={<div>Chargement des audios...</div>}>
        <CardList items={audios} type="song" />
      </Suspense>
    </div>
  );
};

export default AudioDashboardView;
