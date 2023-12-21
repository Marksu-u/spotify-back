import React, { useState, useEffect, Suspense, lazy } from 'react';
import Button from '../components/Button';
import CardList from '../components/CardList';
import { apiService } from '../services/apiService';
import './index.css';

const AdminManagementView = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="dashboard-list-view">
      <h2>Gestion des Administrateurs</h2>
      <CardList items={admins} type="admin" />
    </div>
  );
};

export default AdminManagementView;
