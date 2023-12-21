import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import authService from '../services/authService';
import AuthContext from '../context/authContext';
import './LoginView.css';

const LoginView = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (formData) => {
    try {
      const response = await authService.login(
        formData.username,
        formData.password
      );
      if (response.token) {
        dispatch({ type: 'LOGIN', payload: response.token });
        navigate('/dashboard'); // Redirection après connexion réussie
      } else {
        // Gérer l'absence de token ou d'erreur
      }
    } catch (error) {
      console.error('Erreur de connexion', error);
      // Afficher une notification d'erreur à l'utilisateur
    }
  };

  const loginFields = [
    { name: 'username', label: 'Username', type: 'text', initialValue: '' },
    { name: 'password', label: 'Password', type: 'password', initialValue: '' },
  ];

  return (
    <div className="login-view">
      <div className="login-container">
        <h1>BackOffice {process.env.REACT_APP_VERSION}</h1>
        <Form fields={loginFields} onSubmit={handleLogin} submitLabel="Login" />
      </div>
    </div>
  );
};

export default LoginView;
