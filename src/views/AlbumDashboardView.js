import React, { useState, useEffect, lazy } from 'react';
import notFound from '../assets/404.png';
import { notificationService } from '../services/notificationService';
import { apiService } from '../services/apiService';
import './index.css';

const CardList = lazy(() => import('../components/CardList'));

const AlbumDashboardView = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const fetchedAlbums = await apiService.getAlbums();
        const transformedAlbums = fetchedAlbums.map((album) => {
          return {
            id: album._id,
            title: album.title,
            artist: album.artist.name,
            date: album.releaseDate,
            genre: album.genre.join(', '),
            image: convertBufferToImageUrl(album.picture[0]),
          };
        });
        setAlbums(transformedAlbums);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAlbums();
    notificationService.notify('Albums chargés avec succès', 'success');
  }, []);

  const convertBufferToImageUrl = (picture) => {
    if (picture && picture.data && picture.data.data) {
      const buffer = new Uint8Array(picture.data.data);
      const blob = new Blob([buffer], { type: picture.format });
      return URL.createObjectURL(blob);
    }
    return notFound;
  };

  return (
    <div className="dashboard-list-view">
      <h2>Albums Dashboard</h2>
      <CardList items={albums} type="album" />
    </div>
  );
};

export default AlbumDashboardView;
