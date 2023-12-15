import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardCard from '../components/Dashboard/Card';
import LogoutComponent from '../components/Logout';
import './DashboardView.css';

const AlbumDashboard = lazy(() => import('./AlbumDashboardView'));
const AudioDashboard = lazy(() => import('./AudioDashboardView'));
const ArtistDashboard = lazy(() => import('./ArtistDashboardView'));

const DashboardView = () => {
  return (
    <div className="dashboard-view">
      <h2>Tableau de Bord</h2>
      <LogoutComponent />
      <div className="dashboard-cards">
        <DashboardCard title="Albums" to="/album" />
        <DashboardCard title="Audios" to="/audio" />
        <DashboardCard title="Artistes" to="/artist" />
      </div>
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          <Route path="album" element={<AlbumDashboard />} />
          <Route path="audio" element={<AudioDashboard />} />
          <Route path="artist" element={<ArtistDashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default DashboardView;
