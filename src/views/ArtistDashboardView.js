import React, { useState, useEffect, lazy } from 'react';
import { apiService } from '../services/apiService';
import { notificationService } from '../services/notificationService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));
const Button = lazy(() => import('../components/Button'));

const ArtistDashboardView = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => {
    const fetchArtists = async () => {
      setIsLoading(true);
      try {
        const fetchedArtists = await apiService.getArtists(
          currentPage,
          itemsPerPage
        );

        if (fetchedArtists.length > 0) {
          setArtists((prevArtists) => [
            ...prevArtists,
            ...fetchedArtists.map((artist) => ({
              id: artist._id,
              title: artist.name,
            })),
          ]);
          setHasMore(fetchedArtists.length === itemsPerPage);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtists();
  }, [currentPage, itemsPerPage]);

  const loadMoreArtists = () => {
    if (hasMore) {
      setCurrentPage((current) => current + 1);
    }
  };

  return (
    <div className="dashboard-list-view ">
      <h2>Artist Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {hasMore && <Button label="Charger plus" onClick={loadMoreArtists} />}
          <CardList items={artists} type="artist" />
        </>
      )}
    </div>
  );
};

export default ArtistDashboardView;
