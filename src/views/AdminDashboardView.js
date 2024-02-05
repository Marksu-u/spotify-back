import { useState, useEffect, lazy, Suspense } from 'react';
import { apiService } from '../services/apiService';
import { transformAdmins } from '../services/transformService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));

const AdminDashboardView = () => {
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    fecthAdmins();
  }, []);

  return (
    <div className="dashboard-list-view">
      <h2>Admin Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <CardList items={admins} type="admin" onRefresh={fecthAdmins} />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default AdminDashboardView;
