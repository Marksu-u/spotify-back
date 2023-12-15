import React from 'react';
import LoginForm from '../components/LoginForm';
import './LoginView.css';

const VERSION = process.env.REACT_APP_VERSION;

const LoginView = () => {
  return (
    <div className="login-view">
      <div className="login-container">
        <h1>BackOffice {VERSION}</h1>
        <LoginForm />
        {/* Vous pouvez ajouter plus d'éléments ici si nécessaire */}
      </div>
    </div>
  );
};

export default LoginView;
