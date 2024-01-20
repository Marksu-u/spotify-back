const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MyDatabase', 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore('audios', { keyPath: 'id' });
      db.createObjectStore('artists', { keyPath: 'id' });
      db.createObjectStore('albums', { keyPath: 'id' });
    };

    request.onerror = (event) => {
      reject(`Database error: ${event.target.errorCode}`);
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
  });
};

export const saveAudios = async (audios) => {
  const db = await openDatabase();
  const transaction = db.transaction('audios', 'readwrite');
  const store = transaction.objectStore('audios');

  for (let audio of audios) {
    store.put(audio);
  }
};

export const getAudios = async () => {
  const db = await openDatabase();
  const transaction = db.transaction('audios', 'readonly');
  const store = transaction.objectStore('audios');

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onerror = () => {
      reject('Failed to retrieve data from database.');
    };

    request.onsuccess = () => {
      resolve(request.result);
    };
  });
};

export const saveArtists = async (artists) => {
  const db = await openDatabase();
  const transaction = db.transaction('artists', 'readwrite');
  const store = transaction.objectStore('artists');

  for (let artist of artists) {
    store.put(artist);
  }
};

export const getArtists = async () => {
  const db = await openDatabase();
  const transaction = db.transaction('artists', 'readonly');
  const store = transaction.objectStore('artists');

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onerror = () => {
      reject('Failed to retrieve data from database.');
    };

    request.onsuccess = () => {
      resolve(request.result);
    };
  });
};

export const addArtist = async (artist) => {
  const db = await openDatabase();
  const transaction = db.transaction('artists', 'readwrite');
  const store = transaction.objectStore('artists');
  store.add(artist);
};

export const saveAlbums = async (albums) => {
  const db = await openDatabase();
  const transaction = db.transaction('albums', 'readwrite');
  const store = transaction.objectStore('albums');

  for (let album of albums) {
    store.put(album);
  }
};

export const getAlbums = async () => {
  const db = await openDatabase();
  const transaction = db.transaction('albums', 'readonly');
  const store = transaction.objectStore('albums');

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onerror = () => {
      reject('Failed to retrieve data from database.');
    };

    request.onsuccess = () => {
      resolve(request.result);
    };
  });
};
