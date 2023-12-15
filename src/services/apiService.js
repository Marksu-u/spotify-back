const API_URL = process.env.REACT_APP_API_URL;

/* ------------- AUDIOS ------------- */
const getAudios = async () => {
  const response = await fetch(`${API_URL}audio`);
  if (!response.ok) throw new Error('Erreur lors du chargement des audios');
  return await response.json();
};

const getSingleAudio = async (id) => {
  const response = await fetch(`${API_URL}/audios/${id}`);
  if (!response.ok)
    throw new Error('Erreur lors de la récupération de l’audio');
  return await response.json();
};

const editAudio = async (id, audioData) => {
  const response = await fetch(`${API_URL}/audios/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(audioData),
  });
  if (!response.ok)
    throw new Error('Erreur lors de la modification de l’audio');
  return await response.json();
};

const uploadAudio = async (audioFile) => {
  const formData = new FormData();
  formData.append('audioFile', audioFile);

  const response = await fetch(`${API_URL}/audios/upload`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) throw new Error('Erreur lors de l’upload de l’audio');
  return await response.json();
};

const deleteAudio = async (id) => {
  const response = await fetch(`${API_URL}/audios/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Erreur lors de la suppression de l’audio');
  return await response.json();
};

const streamAudio = async (id) => {
  const response = await fetch(`${API_URL}/audios/stream/${id}`);
  if (!response.ok) throw new Error('Erreur lors du streaming de l’audio');
  return await response.json();
};

const getStreamingCount = async (id) => {
  const response = await fetch(`${API_URL}/audios/streamed/${id}`);
  if (!response.ok)
    throw new Error('Erreur lors de la récupération du nombre de stream');
  return await response.json();
};

export const apiService = {
  /* ------------- AUDIOS ------------- */
  getAudios,
  getSingleAudio,
  editAudio,
  uploadAudio,
  deleteAudio,
  streamAudio,
  getStreamingCount,
  /* ------------- ALBUMS ------------- */
  /* ------------- ARTISTS ------------- */
  /* ------------- ADMIN ------------- */
};
