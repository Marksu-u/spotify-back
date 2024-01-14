import React, { lazy, useEffect, useState } from 'react';
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

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    fetchAudios(currentPage);
  }, [currentPage]);

  const fetchAudios = async (page) => {
    try {
      setIsLoading(true);
      const fetchedAudios = await apiService.getAudios(page, ITEMS_PER_PAGE);
      if (fetchedAudios.length > 0) {
        setAudios((prevAudios) => [
          ...prevAudios,
          ...fetchedAudios.map(transformAudio),
        ]);
        notificationService.notify('Audios chargés avec succès !', 'success');
        if (fetchedAudios.length < ITEMS_PER_PAGE) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const transformAudio = (audio) => {
    return {
      id: audio._id,
      title: audio.filename,
      artist: audio.metadata.artist.name,
      artistId: audio.metadata.artist._id,
      album: audio.metadata.album.title,
      albumId: audio.metadata.album._id,
      date: audio.metadata.date,
      genre: audio.metadata.genre.join(', '),
      image: convertBufferToImageUrl(audio.metadata.picture[0]),
    };
  };

  const convertBufferToImageUrl = (picture) => {
    if (picture && picture.data && picture.data.data) {
      const buffer = new Uint8Array(picture.data.data);
      const blob = new Blob([buffer], { type: picture.format });
      return URL.createObjectURL(blob);
    }
    return null;
  };

  if (isLoading) {
    return (
      <div className="dashboard-list-view">
        <h2>Audio Dashboard</h2>
        <Loader />
      </div>
    );
  }

  const loadMoreAudios = () => {
    if (hasMore && !isLoading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="dashboard-list-view">
      <h2>Audio Dashboard</h2>
      {isLoading && <Loader />}
      {hasMore && !isLoading && (
        <Button label="Charger plus" onClick={loadMoreAudios} />
      )}
      <CardList items={audios} type="song" />
    </div>
  );
};

export default AudioDashboardView;
