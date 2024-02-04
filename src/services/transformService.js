import { convertBufferToBase64 } from '../services/convertBufferService';

export const transformAlbums = async (album) => ({
  _id: album._id,
  title: album.title,
  artist: album.artist.name,
  artistId: album.artist._id,
  releaseDate: album.releaseDate,
  genre: album.genre,
  picture: convertBufferToBase64(album.picture[0]),
});

export const transformArtist = async (artist) => ({
  _id: artist._id,
  title: artist.name,
});

export const transformAudio = async (audio, album, artistName) => ({
  _id: audio._id,
  title: audio.title,
  artist: artistName,
  artistId: album.artistId,
  album: album.title,
  albumId: album._id,
  releaseDate: album.releaseDate,
  genre: audio.genre,
  picture: convertBufferToBase64(album.picture[0]),
});
