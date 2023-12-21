import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Player = ({ src }) => {
  if (!src) return null;

  return (
    <div className="player">
      <audio src={src} controls autoPlay />
    </div>
  );
};

Player.propTypes = {
  src: PropTypes.string.isRequired,
};

export default React.memo(Player);
