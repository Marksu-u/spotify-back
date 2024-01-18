import React, { useState, useEffect, lazy } from 'react';
import notFound from '../assets/404.png';
import { notificationService } from '../services/notificationService';
import { apiService } from '../services/apiService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));
const Button = lazy(() => import('../components/Button'));

const AlbumDashboardView = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => {
    const fetchAlbums = async () => {
      setIsLoading(true);
      try {
        const fetchedAlbums = await apiService.getAlbums(
          currentPage,
          itemsPerPage
        );
        if (fetchedAlbums.length > 0) {
          setAlbums((prevAlbums) => [
            ...prevAlbums,
            ...fetchedAlbums.map(transformAlbums),
          ]);
        }
        notificationService.notify('Albums chargés avec succès', 'success');
        setHasMore(fetchedAlbums.length === itemsPerPage);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAlbums();
  }, [currentPage, itemsPerPage]);

  const transformAlbums = (album) => ({
    id: album._id,
    title: album.title,
    artist: album.artist.name,
    artistId: album.artist._id,
    date: album.releaseDate,
    genre: album.genre.join(', '),
    image: convertBufferToImageUrl(album.picture[0]),
  });

  const convertBufferToImageUrl = (picture) => {
    if (picture?.data?.data) {
      const buffer = new Uint8Array(picture.data.data);
      return URL.createObjectURL(new Blob([buffer], { type: picture.format }));
    }
    return notFound;
  };

  const loadMoreAlbums = () => {
    if (hasMore) {
      setCurrentPage((current) => current + 1);
    }
  };

  return (
    <div className="dashboard-list-view">
      <h2>Albums Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {hasMore && <Button label="Charger plus" onClick={loadMoreAlbums} />}
          <CardList items={albums} type="album" />
        </>
      )}
    </div>
  );
};

export default AlbumDashboardView;
