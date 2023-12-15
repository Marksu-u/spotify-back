import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const AudioTrack = ({ title, album, artist, date, genre, picture, onEdit }) => {
  let imageSrc = '';

  if (picture && picture.length > 0) {
    const blob = new Blob([new Uint8Array(picture[0].data.data)], {
      type: picture[0].format,
    });
    imageSrc = URL.createObjectURL(blob);
  }

  return (
    <div className="audio-track">
      <div className="audio-track-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="audio-track-info">
        <div className="audio-track-title">{title}</div>
        <div className="audio-track-details">
          <span>{artist}</span> | <span>{album}</span> | <span>{date}</span>
          <div className="audio-track-genre">{genre.join(', ')}</div>
        </div>
      </div>
      <button className="audio-track-edit" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};

AudioTrack.propTypes = {
  title: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  picture: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        type: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
      }),
      format: PropTypes.string.isRequired,
    })
  ),
  onEdit: PropTypes.func.isRequired,
};

export default AudioTrack;
