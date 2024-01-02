import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const Input = React.lazy(() => import('./Input'));
const Button = React.lazy(() => import('./Button'));

const Modal = ({ isOpen, onClose, data, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <Suspense fallback={<div>Chargement...</div>}>
          <form onSubmit={onSubmit}>
            <Button type="submit" label="Valider" />
            <Button type="button" label="Annuler" onClick={onClose} />
          </form>
        </Suspense>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default React.memo(Modal);
