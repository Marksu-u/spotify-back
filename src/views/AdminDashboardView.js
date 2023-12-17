import React, { useState, useEffect, Suspense, lazy } from 'react';
import { apiService } from '../services/apiService';
import Button from '../components/Button';

const AdminList = lazy(() => import('../components/DashboardAdmin/AdminList'));
const AdminEditForm = lazy(
  () => import('../components/DashboardAdmin/AdminUpdate')
);
const AdminAddForm = lazy(
  () => import('../components/DashboardAdmin/AdminAdd')
);

const AdminManagementView = () => {
  const [admins, setAdmins] = useState([]);
  const [selectedAdminId, setSelectedAdminId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    apiService
      .getAdmins()
      .then((data) => setAdmins(data))
      .catch((error) =>
        console.error('Erreur lors du chargement des administrateurs', error)
      );
  }, []);

  const handleEditClick = (adminId) => {
    setSelectedAdminId(adminId);
    setIsEditModalOpen(true);
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
  };

  return (
    <div className="admin-management-view">
      <h2>Gestion des Administrateurs</h2>
      <Button label="Ajouter un Administrateur" onClick={handleAddClick} />

      <Suspense fallback={<div>Chargement...</div>}>
        {isEditModalOpen && (
          <AdminEditForm adminId={selectedAdminId} onClose={handleCloseModal} />
        )}
        {isAddModalOpen && <AdminAddForm onClose={handleCloseModal} />}
        <AdminList admins={admins} onEdit={handleEditClick} />
      </Suspense>
    </div>
  );
};

export default AdminManagementView;
