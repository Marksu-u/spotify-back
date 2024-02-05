import React, { useState, useEffect, lazy, Suspense } from 'react';
import { apiService } from '../services/apiService';
import { saveArtists, getArtists } from '../services/indexerDBService';
import { transformArtist } from '../services/transformService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));

const ArtistDashboardView = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArtists = async () => {
    setIsLoading(true);

    try {
      let artistData = await getArtists();

      if (!artistData.length) {
        const fetchedArtists = await apiService.getArtists();
        const transformedArtists = await Promise.all(
          fetchedArtists.map(transformArtist)
        );
        await saveArtists(transformedArtists);
        artistData = transformedArtists;
        console.log('Fetched : ', transformedArtists);
      }

      setArtists(artistData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <div className="dashboard-list-view ">
      <h2>Artist Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <CardList items={artists} type="artist" onRefresh={fetchArtists} />
          </Suspense>
        </>
      )}{' '}
    </div>
  );
};

export default ArtistDashboardView;
