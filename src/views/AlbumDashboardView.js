import { useState, useEffect, lazy, Suspense } from 'react';
import { saveAlbums, getAlbums } from '../services/indexerDBService';
import { apiService } from '../services/apiService';
import { transformAlbums } from '../services/transformService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));

const AlbumDashboardView = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className="dashboard-list-view">
      <h2>Albums Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <CardList items={albums} type="album" onRefresh={fetchAlbums} />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default AlbumDashboardView;
