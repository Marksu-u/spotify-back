import React, { useState, useEffect, lazy } from 'react';
import { apiService } from '../services/apiService';
import { notificationService } from '../services/notificationService';
import './index.css';

import Loader from '../components/Loader';
const CardList = lazy(() => import('../components/CardList'));

const AdminManagementView = () => {
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fecthAdmins = async () => {
      try {
        setIsLoading(true);
        const fecthedAdmins = await apiService.getAdmins();
        const transformedAdmins = fecthedAdmins.map((admin) => {
          return {
            id: admin._id,
            title: admin.username,
            artist: admin.email,
          };
        });
        setAdmins(transformedAdmins);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fecthAdmins();
    notificationService.notify('Admins chargés avec succès', 'success');
  }, []);

  if (isLoading) {
    return (
      <div className="dashboard-list-view">
        <h2>Admin Dashboard</h2>
        <Loader />
      </div>
    );
  }

  return (
    <div className="dashboard-list-view">
      <h2>Admin Dashboard</h2>
      {isLoading && <Loader />}

      <CardList items={admins} type="admin" />
    </div>
  );
};

export default AdminManagementView;
