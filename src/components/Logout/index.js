import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authContext';

const LogoutComponent = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return <button onClick={handleLogout}>Déconnexion</button>;
};

export default LogoutComponent;
