import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './index.css';

const Card = ({ type, data, onClick, onCRUD }) => {
  const renderContent = () => {
    switch (type) {
      /* ------ ARTISTE ------ */
      case 'artist':
        return <div>Infos Artiste: </div>;

      /* ------ AUDIO ------ */
      case 'song':
        const imageSrc = convertBufferToImageUrl(data.image);
        return (
          <div>
            <div>Titre de la chanson : {data.title}</div>
            <div>Artiste : {data.artist}</div>
            <div>Album : {data.album}</div>
            <div>Date : {data.date}</div>
            <div>Genre : {data.genre}</div>
            <img src={imageSrc} alt={data.album} />
          </div>
        );

      /* ------ ALBUM ------ */
      case 'album':
        return <div>Infos Album: </div>;

      /* ------ ADMIN ------ */
      case 'admin':
        return <div>Admin Controls</div>;

      /* ------ DEFAULT ------ */
      default:
        return <div>Données non disponibles</div>;
    }
  };

  const convertBufferToImageUrl = (picture) => {
    let imageSrc = '';
    if (picture && picture.length > 0) {
      const blob = new Blob([new Uint8Array(picture)], {
        type: 'image/jpeg',
      });
      imageSrc = URL.createObjectURL(blob);
    }
    return imageSrc;
  };

  const renderCRUDButtons = () => (
    <div>
      <Button onClick={() => onCRUD('read')}>Lire</Button>
      <Button onClick={() => onCRUD('update')}>Mettre à jour</Button>
      <Button onClick={() => onCRUD('delete')}>Supprimer</Button>
    </div>
  );

  return (
    <div className="card" onClick={onClick}>
      <div className="card-title"></div>
      {renderContent()}
      {renderCRUDButtons()}
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(['artist', 'song', 'album', 'admin']),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  data: PropTypes.any,
  onClick: PropTypes.func,
  onCRUD: PropTypes.func,
};

Card.defaultProps = {
  type: 'default',
  onClick: () => {},
  onCRUD: () => {},
};

export default Card;
