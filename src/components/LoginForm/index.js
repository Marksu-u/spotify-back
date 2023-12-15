import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import AuthContext from '../../context/authContext';
import Input from '../Input';
import SubmitButton from '../SubmitButton';
import { notificationService } from '../../services/notificationService';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authService.login(username, password);
      dispatch({ type: 'LOGIN', payload: data.token });
      navigate('/');
    } catch (error) {
      console.error('Login error', error);
      notificationService.notify('Une erreur est survenue.', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton label="Login" />
    </form>
  );
};

export default LoginForm;
