import React, { useState, lazy } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = lazy(() => import('../Button'));
const Modal = lazy(() => import('../Modal'));

const CardAdd = ({ type, onAdd }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newData, setNewData] = useState({});

  const handleAdd = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setNewData({});
  };

  const handleSubmit = async (data) => {
    await onAdd(data, type);
    setModalOpen(false);
  };

  return (
    <div className="card-add">
      <Button label={`Ajouter ${type}`} onClick={handleAdd} />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          data={newData}
          onSubmit={handleSubmit}
          actionType="add"
          type={type}
        />
      )}
    </div>
  );
};

CardAdd.propTypes = {
  type: PropTypes.oneOf(['artist', 'song', 'album', 'admin']).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default CardAdd;
