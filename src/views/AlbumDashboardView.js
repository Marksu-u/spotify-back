import React, { useState, useEffect, useCallback, lazy } from 'react';
import notFound from '../assets/404.png';
import { notificationService } from '../services/notificationService';
import {
  saveAlbums,
  getAlbums,
  getArtists,
} from '../services/indexerDBService';
import { apiService } from '../services/apiService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));
const Button = lazy(() => import('../components/Button'));

const transformAlbums = async (album) => ({
  id: album._id,
  title: album.title,
  artist: album.artist.name,
  artistId: album.artist._id,
  date: album.releaseDate,
  genre: album.genre.join(', '),
  image: convertBufferToBase64(album.picture[0]),
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

const AlbumDashboardView = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      setIsLoading(true);

      try {
        let albumData = await getAlbums();

        if (!albumData.length) {
          const fetchedAlbums = await apiService.getAlbums();
          const transformedAlbums = await Promise.all(
            fetchedAlbums.map(transformAlbums)
          );
          await saveAlbums(transformedAlbums);
          albumData = transformedAlbums;
        }

        setAlbums(albumData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className="dashboard-list-view">
      <h2>Albums Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardList items={albums} type="album" />
        </>
      )}
    </div>
  );
};

export default AlbumDashboardView;
