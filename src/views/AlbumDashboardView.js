import { useState, useEffect, lazy } from 'react';
import { saveAlbums, getAlbums } from '../services/indexerDBService';
import { apiService } from '../services/apiService';
import { transformAlbums } from '../services/transformService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));

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
