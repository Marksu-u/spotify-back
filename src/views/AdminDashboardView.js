import { useState, useEffect, lazy } from 'react';
import { apiService } from '../services/apiService';
import { notificationService } from '../services/notificationService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));
const Button = lazy(() => import('../components/Button'));

const AdminManagementView = () => {
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => {
    const fecthAdmins = async () => {
      setIsLoading(true);
      try {
        const fecthedAdmins = await apiService.getAdmins(
          currentPage,
          itemsPerPage
        );
        if (fecthedAdmins.length > 0) {
          setAdmins((prevAdmins) => [
            ...prevAdmins,
            ...fecthedAdmins.map(transformAdmins),
          ]);
          notify('Admin chargé', 'success');
          setHasMore(fecthedAdmins.length === itemsPerPage);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fecthAdmins();
    notificationService.notify('Admins chargés avec succès', 'success');
  }, []);

  const loadMoreAdmins = () => {
    if (hasMore) {
      setCurrentPage((current) => current + 1);
    }
  };

  const transformAdmins = (admin) => ({
    id: admin._id,
    title: admin.username,
    artist: admin.email,
  });

  return (
    <div className="dashboard-list-view">
      <h2>Admin Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {hasMore && <Button label="Charger plus" onClick={loadMoreAdmins} />}
          <CardList items={admins} type="admin" />
        </>
      )}
    </div>
  );
};

export default AdminManagementView;
