import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import { apiService } from '../services/apiService';
import './index.css';

const ArtistDashboardView = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const fetchedArtists = await apiService.getArtists();
        setArtists(
          fetchedArtists.map((artist) => ({
            id: artist._id,
            name: artist.name,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="dashboard-list-view ">
      <h2>Artist Dashboard</h2>
      <CardList items={artists} type="artist" />
    </div>
  );
};

export default ArtistDashboardView;
