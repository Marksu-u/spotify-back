import React, { Suspense, lazy, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const AudioPlayer = lazy(() => import('../components/Dashboard/AudioPlayer'));
const AudioList = lazy(() => import('../components/Dashboard/AudioList'));
const AddAudio = lazy(() => import('../components/Dashboard/AddAudio'));

const AudioDashboardView = () => {
  const [selectedAudioId, setSelectedAudioId] = useState('');

  const handlePlay = useCallback((audioId) => {
    setSelectedAudioId(audioId);
  }, []);

  return (
    <div>
      <h2>Audio Dashboard</h2>
      <Suspense fallback={<div>Chargement des audios...</div>}>
        <AudioList onSelectAudio={handlePlay} />
      </Suspense>
      <Suspense fallback={<div>Chargement du lecteur audio...</div>}>
        <AudioPlayer audioId={selectedAudioId} />
      </Suspense>
      {/*
      <Suspense fallback={<div>Chargement du formulaire d&apos;ajout...</div>}>
        <AddAudio />
      </Suspense>
      <Link to="/dashboard">Retour au Tableau de Bord Principal</Link>
  */}
    </div>
  );
};

export default AudioDashboardView;
