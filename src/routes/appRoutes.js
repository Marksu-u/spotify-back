import React, { useContext } from 'react';
import {
  Route,
  HashRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import AuthContext from '../context/authContext';
import LoginView from '../views/LoginView';
import DashboardView from '../views/DashboardView';

const AppRoutes = () => {
  const { state } = useContext(AuthContext);
  const userIsLoggedIn = state.isLoggedIn;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route
          path="/*"
          element={
            userIsLoggedIn ? <DashboardView /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
