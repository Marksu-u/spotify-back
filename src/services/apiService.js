const API_URL = process.env.REACT_APP_API_URL;

/* ------------- AUDIO ------------- */
const getAudios = async (page, limit) => {
  const url = `${API_URL}audio?page=${page}&limit=${limit}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Erreur lors du chargement des audios');
  return await response.json();
};

const getSingleAudio = async (id) => {
  const response = await fetch(`${API_URL}audio/${id}`);
  if (!response.ok)
    throw new Error('Erreur lors de la récupération de l’audio');
  return await response.json();
};

const editAudio = async (id, audioData) => {
  const response = await fetch(`${API_URL}audio/${id}`, {
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

  const response = await fetch(`${API_URL}audio/upload`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) throw new Error('Erreur lors de l’upload de l’audio');
  return await response.json();
};

const deleteAudio = async (id) => {
  const response = await fetch(`${API_URL}audio/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Erreur lors de la suppression de l’audio');
  return await response.json();
};

const streamAudio = async (id) => {
  const response = await fetch(`${API_URL}audio/stream/${id}`);
  if (!response.ok) throw new Error('Erreur lors du streaming de l’audio');
  return await response.json();
};

const getStreamingCount = async (id) => {
  const response = await fetch(`${API_URL}audio/streamed/${id}`);
  if (!response.ok)
    throw new Error('Erreur lors de la récupération du nombre de stream');
  return await response.json();
};

/* ------------- ARTIST ------------- */
const getArtists = async (page, limit) => {
  const response = await fetch(`${API_URL}artist/?page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error('Erreur lors du chargement des artistes');
  return await response.json();
};

const getAllArtists = async () => {
  const response = await fetch(`${API_URL}artist/all`);
  if (!response.ok) throw new Error('Erreur lors du chargement des artistes');
  return await response.json();
};

const getSingleArtist = async (id) => {
  const response = await fetch(`${API_URL}artist/${id}`);
  if (!response.ok)
    throw new Error('Erreur lors de la récupération de l’artiste');
  return await response.json();
};

const editArtist = async (id, artistData) => {
  const response = await fetch(`${API_URL}artist/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(artistData),
  });
  if (!response.ok)
    throw new Error('Erreur lors de la modification de l’artiste');
  return await response.json();
};

const createArtist = async (artistData) => {
  const response = await fetch(`${API_URL}artist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(artistData),
  });
  if (!response.ok) throw new Error('Erreur lors de la création de l’artiste');
  return await response.json();
};

const deleteArtist = async (id) => {
  const response = await fetch(`${API_URL}artist/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok)
    throw new Error('Erreur lors de la suppression de l’artiste');
  return await response.json();
};

/* ------------- ALBUM ------------- */
const getAlbums = async (page, limit) => {
  const response = await fetch(`${API_URL}album/?page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error('Erreur lors du chargement des albums');
  return await response.json();
};

const getAllAlbums = async () => {
  const response = await fetch(`${API_URL}album/all`);
  if (!response.ok) throw new Error('Erreur lors du chargement des albums');
  return await response.json();
};
const getSingleAlbum = async (id) => {
  const response = await fetch(`${API_URL}album/${id}`);
  if (!response.ok)
    throw new Error('Erreur lors de la récupération de l’album');
  return await response.json();
};

const createAlbum = async (albumData) => {
  formData.append('title', albumData.title);
  formData.append('artist', albumData.artistId);
  formData.append('releaseDate', albumData.releaseDate);
  formData.append('genre', JSON.stringify(albumData.genre));

  if (albumData.picture) {
    formData.append('albumImage', albumData.picture);
  }

  const response = await fetch(`${API_URL}album`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) throw new Error('Erreur lors de la création de l’album');
  return await response.json();
};

const editAlbum = async (id, albumData) => {
  const formData = new FormData();
  formData.append('title', albumData.title);
  formData.append('artist', albumData.artistId);
  formData.append('releaseDate', albumData.releaseDate);
  formData.append('genre', albumData.genre);

  if (albumData.picture && albumData.picture instanceof File) {
    formData.append('albumImage', albumData.picture);
  }

  const response = await fetch(`${API_URL}album/${id}`, {
    method: 'PUT',
    body: formData,
  });

  if (!response.ok)
    throw new Error('Erreur lors de la modification de l’album');
  return await response.json();
};

const deleteAlbum = async (id) => {
  const response = await fetch(`${API_URL}album/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Erreur lors de la suppression de l’album');
  return await response.json();
};

/* ------------- ADMIN ------------- */
const getAdmins = async (page, limit) => {
  const token = localStorage.getItem('userToken');
  const response = await fetch(`${API_URL}admin/?page=${page}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok)
    throw new Error(
      'Erreur lors de la récupération des données des administrateurs'
    );
  return await response.json();
};

const getSingleAdmin = async (id) => {
  const token = localStorage.getItem('userToken');
  const response = await fetch(`${API_URL}admin/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok)
    throw new Error(
      'Erreur lors de la récupération des données de l’administrateur'
    );
  return await response.json();
};

const addAdmin = async (adminData) => {
  const token = localStorage.getItem('userToken');
  const response = await fetch(`${API_URL}admin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(adminData),
  });
  if (!response.ok)
    throw new Error('Erreur lors de l’ajout de l’administrateur');
  return await response.json();
};

const editAdmin = async (id, adminData) => {
  const token = localStorage.getItem('userToken');
  const response = await fetch(`${API_URL}admin/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(adminData),
  });
  if (!response.ok)
    throw new Error('Erreur lors de la mise à jour de l’administrateur');
  return await response.json();
};

const deleteAdmin = async (id) => {
  const token = localStorage.getItem('userToken');
  const response = await fetch(`${API_URL}admin/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok)
    throw new Error('Erreur lors de la suppression de l’administrateur');
  return await response.json();
};

export const apiService = {
  /* ------------- AUDIO ------------- */
  getAudios,
  getSingleAudio,
  editAudio,
  uploadAudio,
  deleteAudio,
  streamAudio,
  getStreamingCount,
  /* ------------- ARTIST ------------- */
  getArtists,
  getAllArtists,
  getSingleArtist,
  editArtist,
  createArtist,
  deleteArtist,
  /* ------------- ALBUM ------------- */
  getAlbums,
  getAllAlbums,
  getSingleAlbum,
  editAlbum,
  createAlbum,
  deleteAlbum,
  /* ------------- ADMIN ------------- */
  getAdmins,
  getSingleAdmin,
  addAdmin,
  editAdmin,
  deleteAdmin,
};
