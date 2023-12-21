import React, { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import './index.css';
import { notificationService } from '../services/notificationService';
import { apiService } from '../services/apiService';

const CardList = lazy(() => import('../components/CardList'));

const AudioDashboardView = () => {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    const fetchAudios = async () => {
      try {
        const fetchedAudios = await apiService.getAudios();
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
    notificationService.notify('Audios chargés avec succès', 'success');
    fetchAudios();
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

export default React.memo(AudioDashboardView);
