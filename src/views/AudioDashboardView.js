import { lazy, useEffect, useState } from 'react';
import { apiService } from '../services/apiService';
import { saveAudios, getAudios } from '../services/indexerDBService';
import { transformAudio } from '../services/transformService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));

const AudioDashboardView = () => {
  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAudios = async () => {
      setIsLoading(true);

      try {
        let audioData = await getAudios();

        if (!audioData.length) {
          const fetchedAlbums = await apiService.getAudios();
          const transformedAudios = [];

          fetchedAlbums.forEach((album) => {
            album.audios.forEach(async (audio) => {
              transformedAudios.push(
                await transformAudio(audio, album, album.name)
              );
            });
          });

          await saveAudios(transformedAudios);
          audioData = transformedAudios;
        }

        setAudios(audioData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAudios();
  }, []);

  return (
    <div className="dashboard-list-view">
      <h2>Audio Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardList items={audios} type="song" />
        </>
      )}
    </div>
  );
};

export default AudioDashboardView;
