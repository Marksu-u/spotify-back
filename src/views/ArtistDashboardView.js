import React, { useState, useEffect, lazy } from 'react';
import { apiService } from '../services/apiService';
import { notificationService } from '../services/notificationService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));

const ArtistDashboardView = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setIsLoading(true);
        const fetchedArtists = await apiService.getArtists();
        setArtists(
          fetchedArtists.map((artist) => ({
            id: artist._id,
            title: artist.name,
          }))
        );
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArtists();
    notificationService.notify('Audios chargés avec succès', 'success');
  }, []);

  if (isLoading) {
    return (
      <div className="dashboard-list-view">
        <h2>Artist Dashboard</h2>
        <Loader />
      </div>
    );
  }

  return (
    <div className="dashboard-list-view ">
      <h2>Artist Dashboard</h2>
      <CardList items={artists} type="artist" />
    </div>
  );
};

export default ArtistDashboardView;
