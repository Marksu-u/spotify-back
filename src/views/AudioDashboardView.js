import { lazy, useEffect, useState, Suspense } from 'react';
import { apiService } from '../services/apiService';
import { saveAudios, getAudios } from '../services/indexerDBService';
import { transformAudio } from '../services/transformService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));

const AudioDashboardView = () => {
  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    fetchAudios();
  }, []);

  return (
    <div className="dashboard-list-view">
      <h2>Audio Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <CardList items={audios} type="song" onRefresh={fetchAudios} />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default AudioDashboardView;
