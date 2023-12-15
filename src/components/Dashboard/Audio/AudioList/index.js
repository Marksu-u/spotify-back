import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { apiService } from '../../../../services/apiService';
import { notificationService } from '../../../../services/notificationService';
import AudioTrack from '../AudioTrack';

const AudioList = ({ onSelectAudio }) => {
  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetAudios = async () => {
      setIsLoading(true);
      try {
        const fetchedAudios = await apiService.getAudios();
        setAudios(fetchedAudios);
        notificationService.notify('Audios chargés avec succès', 'success');
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetAudios();
  }, []);

  const handleSelectAudioForEdit = useCallback(
    (audioId) => {
      onSelectAudio(audioId);
    },
    [onSelectAudio]
  );

  if (isLoading) return <div>Chargement des audios...</div>;

  return (
    <div>
      <h1>List Audio</h1>
      {audios.length > 0 ? (
        audios.map((audio, index) => (
          <AudioTrack
            key={audio._id}
            title={audio.filename}
            album={audio.metadata.album.title}
            artist={audio.metadata.artist.name}
            date={audio.metadata.date}
            genre={audio.metadata.genre}
            picture={audio.metadata.picture}
            onEdit={() => handleSelectAudioForEdit(audio._id)}
          />
        ))
      ) : (
        <div>Aucun audio disponible.</div>
      )}
    </div>
  );
};

AudioList.propTypes = {
  onSelectAudio: PropTypes.func.isRequired,
};

export default React.memo(AudioList);
