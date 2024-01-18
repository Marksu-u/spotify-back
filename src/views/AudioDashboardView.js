import { lazy, useEffect, useState } from 'react';
import notFound from '../assets/404.png';
import { apiService } from '../services/apiService';
import { notificationService } from '../services/notificationService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));
const Button = lazy(() => import('../components/Button'));

const AudioDashboardView = () => {
  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => {
    const fetchAudios = async () => {
      setIsLoading(true);
      try {
        const fetchedAudios = await apiService.getAudios(
          currentPage,
          itemsPerPage
        );
        if (fetchedAudios.length > 0) {
          setAudios((prevAudios) => [
            ...prevAudios,
            ...fetchedAudios.map(transformAudio),
          ]);
          notificationService.notify('Audios loaded successfully!', 'success');
          setHasMore(fetchedAudios.length === itemsPerPage);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAudios();
  }, [currentPage, itemsPerPage]);

  const loadMoreAudios = () => {
    if (hasMore) {
      setCurrentPage((current) => current + 1);
    }
  };

  const transformAudio = (audio) => ({
    id: audio._id,
    title: audio.filename,
    artist: audio.metadata.artist.name,
    artistId: audio.metadata.artist._id,
    album: audio.metadata.album.title,
    albumId: audio.metadata.album._id,
    date: audio.metadata.date,
    genre: audio.metadata.genre.join(', '),
    image: convertBufferToImageUrl(audio.metadata.picture[0]),
  });

  const convertBufferToImageUrl = (picture) => {
    if (picture?.data?.data) {
      const buffer = new Uint8Array(picture.data.data);
      return URL.createObjectURL(new Blob([buffer], { type: picture.format }));
    }
    return notFound;
  };

  return (
    <div className="dashboard-list-view">
      <h2>Audio Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {hasMore && <Button label="Charger plus" onClick={loadMoreAudios} />}
          <CardList items={audios} type="song" />
        </>
      )}
    </div>
  );
};

export default AudioDashboardView;
