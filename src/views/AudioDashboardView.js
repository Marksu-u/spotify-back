import React, { Suspense, lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import './AudioDashboardView.css';

const AudioUpdate = lazy(
  () => import('../components/Dashboard/Audio/AudioUpdate')
);
const AudioList = lazy(() => import('../components/Dashboard/Audio/AudioList'));

const AudioDashboardView = () => {
  const [selectedAudioId, setSelectedAudioId] = useState('');
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleSelectAudioForEdit = (audioId) => {
    setSelectedAudioId(audioId);
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
  };

  return (
    <div>
      <h2>Audio Dashboard</h2>
      <Suspense fallback={<div>Chargement...</div>}>
        <AudioList onSelectAudio={handleSelectAudioForEdit} />
        {isEditModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <AudioUpdate
                audioId={selectedAudioId}
                onClose={handleCloseModal}
              />
            </div>
          </div>
        )}
      </Suspense>
      <Link to="/dashboard">Retour au Tableau de Bord Principal</Link>
    </div>
  );
};

export default AudioDashboardView;
