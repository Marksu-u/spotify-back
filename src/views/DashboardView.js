import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import LogoutComponent from '../components/Logout';
import Logo from '../logo.png';
import './index.css';

const AlbumDashboard = lazy(() => import('./AlbumDashboardView'));
const AudioDashboard = lazy(() => import('./AudioDashboardView'));
const ArtistDashboard = lazy(() => import('./ArtistDashboardView'));
const AdminDashboard = lazy(() => import('./AdminDashboardView'));

const DashboardView = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/' || currentPath === '/dashboard') {
      navigate('/dashboard/audio');
    }
  }, [navigate, location.pathname]);

  const handleButton = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
        <h2>
          <img src={Logo} className="dashboard-logo" alt="logo" />
          Tableau de Bord
        </h2>
        <div className="dashboard-buttons">
          <Button label="Audios" onClick={() => handleButton('/audio')} />
          <Button label="Albums" onClick={() => handleButton('/album')} />
          <Button label="Artists" onClick={() => handleButton('/artist')} />
          <Button label="Admins" onClick={() => handleButton('/admin')} />
          <LogoutComponent />
        </div>
      </div>
      <div>
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route path="audio" element={<AudioDashboard />} />
            <Route path="album" element={<AlbumDashboard />} />
            <Route path="artist" element={<ArtistDashboard />} />
            <Route path="admin" element={<AdminDashboard />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardView;
