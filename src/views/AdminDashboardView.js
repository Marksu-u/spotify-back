import { useState, useEffect, lazy } from 'react';
import { apiService } from '../services/apiService';
import { notificationService } from '../services/notificationService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));

const transformAdmins = (admin) => ({
  _id: admin._id,
  title: admin.username,
  artist: admin.email,
  password: '',
});

const AdminManagementView = () => {
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fecthAdmins = async () => {
      setIsLoading(true);

      try {
        const fecthedAdmins = await apiService.getAdmins();
        const transformedAdmins = await Promise.all(
          fecthedAdmins.map(transformAdmins)
        );

        console.log(fecthedAdmins);
        setAdmins(transformedAdmins);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fecthAdmins();
  }, []);

  return (
    <div className="dashboard-list-view">
      <h2>Admin Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardList items={admins} type="admin" />
        </>
      )}
    </div>
  );
};

export default AdminManagementView;
