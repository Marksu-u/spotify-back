import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = process.env.REACT_APP_API_URL;

const login = async (username, password) => {
  try {
    const response = await axios.post(
      `${API_URL}admin/log`,
      {
        username,
        password,
      },
      {
        withCredentials: true,
      }
    );

    if (response.data.token) {
      localStorage.setItem('userToken', response.data.token);
      notificationService.notify('Connecté(e) !', 'success');
    }

    return response.data;
  } catch (error) {
    console.error('Erreur lors de la requête de connexion :', error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('userToken');
  dispatch({ type: 'LOGOUT' });
  navigate('/login');
};

const getCurrentUser = () => {
  const token = localStorage.getItem('userToken');
  if (!token) return null;

  try {
    const user = jwtDecode(token);
    return user;
  } catch (error) {
    return null;
  }
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;
