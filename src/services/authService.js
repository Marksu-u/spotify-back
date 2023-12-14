import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/api/admin/log`, {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem('userToken', response.data.token);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('userToken');
  dispatch({ type: 'LOGOUT' });
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
