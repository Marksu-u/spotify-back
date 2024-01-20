import { lazy, useEffect, useState } from 'react';
import notFound from '../assets/404.png';
import { apiService } from '../services/apiService';
import { saveAudios, getAudios } from '../services/indexerDBService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));

const transformAudio = async (audio) => ({
  id: audio._id,
  title: audio.filename,
  artist: audio.metadata.artist.name,
  artistId: audio.metadata.artist._id,
  album: audio.metadata.album.title,
  albumId: audio.metadata.album._id,
  date: audio.metadata.date,
  genre: audio.metadata.genre.join(', '),
  image: convertBufferToBase64(audio.metadata.picture[0]),
});

const convertBufferToBase64 = (picture) => {
  if (picture?.data?.data) {
    const buffer = new Uint8Array(picture.data.data);
    let binary = '';
    buffer.forEach((b) => (binary += String.fromCharCode(b)));
    return `data:${picture.format};base64,${window.btoa(binary)}`;
  }
  return notFound;
};

const AudioDashboardView = () => {
  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAudios = async () => {
      setIsLoading(true);

      try {
        let audioData = await getAudios();

        if (!audioData.length) {
          const fetchedAudios = await apiService.getAudios();
          const transformedAudios = await Promise.all(
            fetchedAudios.map(transformAudio)
          );
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
