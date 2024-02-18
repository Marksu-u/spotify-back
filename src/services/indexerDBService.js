const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('mk-bospot', 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore('audios', { keyPath: '_id' });
      db.createObjectStore('artists', { keyPath: '_id' });
      db.createObjectStore('albums', { keyPath: '_id' });
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

export const addAudio = async (audio) => {
  try {
    const db = await openDatabase();
    const transaction = db.transaction('audios', 'readwrite');
    const store = transaction.objectStore('audios');

    return new Promise((resolve, reject) => {
      const request = store.add(audio);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      transaction.oncomplete = () => console.log('Transaction completed.');
      transaction.onerror = () => reject(transaction.error);
    });
  } catch (error) {
    console.error('Error adding audio:', error);
    throw error;
  }
};

export const deleteAudio = async (audio) => {
  const db = await openDatabase();
  const transaction = db.transaction('audios', 'readwrite');
  const store = transaction.objectStore('audios');
  store.delete(audio);
};

export const updateAudio = async (audio) => {
  try {
    const db = await openDatabase();
    const transaction = db.transaction('audios', 'readwrite');
    const store = transaction.objectStore('audios');

    return new Promise((resolve, reject) => {
      const request = store.put(audio);

      request.onsuccess = () => {
        console.log('Audio updated successfully.');
        resolve(request.result);
      };
      request.onerror = () => {
        console.error('Error updating Audio:', request.error);
        reject(request.error);
      };

      transaction.oncomplete = () =>
        console.log('Transaction for updating Audio completed.');
      transaction.onerror = () => {
        console.error('Transaction error:', transaction.error);
        reject(transaction.error);
      };
    });
  } catch (error) {
    console.error('Error updating Audio:', error);
    throw error;
  }
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

export const deleteArtist = async (artist) => {
  const db = await openDatabase();
  const transaction = db.transaction('artists', 'readwrite');
  const store = transaction.objectStore('artists');
  store.delete(artist);
};

export const updateArtist = async (artist) => {
  try {
    const db = await openDatabase();
    const transaction = db.transaction('artists', 'readwrite');
    const store = transaction.objectStore('artists');

    return new Promise((resolve, reject) => {
      const request = store.put(artist);

      request.onsuccess = () => {
        console.log('Artist updated successfully.');
        resolve(request.result);
      };
      request.onerror = () => {
        console.error('Error updating Artist:', request.error);
        reject(request.error);
      };

      transaction.oncomplete = () =>
        console.log('Transaction for updating Artist completed.');
      transaction.onerror = () => {
        console.error('Transaction error:', transaction.error);
        reject(transaction.error);
      };
    });
  } catch (error) {
    console.error('Error updating Artist:', error);
    throw error;
  }
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

export const addAlbum = async (album) => {
  try {
    const db = await openDatabase();
    const transaction = db.transaction('albums', 'readwrite');
    const store = transaction.objectStore('albums');

    return new Promise((resolve, reject) => {
      const request = store.add(album);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      transaction.oncomplete = () =>
        console.log('Transaction for adding album completed.');

      transaction.onerror = () => reject(transaction.error);
    });
  } catch (error) {
    console.error('Error adding album:', error);
    throw error;
  }
};

export const deleteAlbum = async (album) => {
  const db = await openDatabase();
  const transaction = db.transaction('albums', 'readwrite');
  const store = transaction.objectStore('albums');
  store.delete(album);
};

export const updateAlbum = async (album) => {
  try {
    const db = await openDatabase();
    const transaction = db.transaction('albums', 'readwrite');
    const store = transaction.objectStore('albums');

    return new Promise((resolve, reject) => {
      const request = store.put(album);

      request.onsuccess = () => {
        console.log('Album updated successfully.');
        resolve(request.result);
      };
      request.onerror = () => {
        console.error('Error updating album:', request.error);
        reject(request.error);
      };

      transaction.oncomplete = () =>
        console.log('Transaction for updating album completed.');
      transaction.onerror = () => {
        console.error('Transaction error:', transaction.error);
        reject(transaction.error);
      };
    });
  } catch (error) {
    console.error('Error updating album:', error);
    throw error;
  }
};
