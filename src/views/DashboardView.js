import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const dashboards = ['/audio', '/album', '/artist', '/admin'];

  useEffect(() => {
    navigate(dashboards[currentIndex]);
  }, [currentIndex, navigate]);

  const handleButtonClick = (path) => {
    const index = dashboards.indexOf(path);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
        <h2>
          <img src={Logo} className="dashboard-logo" alt="logo" />
          Tableau de Bord
        </h2>
        <div className="dashboard-buttons">
          <Button label="Audios" onClick={() => handleButtonClick('/audio')} />
          <Button label="Albums" onClick={() => handleButtonClick('/album')} />
          <Button
            label="Artists"
            onClick={() => handleButtonClick('/artist')}
          />
          <Button label="Admins" onClick={() => handleButtonClick('/admin')} />
          <LogoutComponent />
        </div>
      </div>
      <div className="dashboard-content">
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

export default React.memo(DashboardView);
