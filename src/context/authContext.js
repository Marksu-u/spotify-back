import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  isLoggedIn: !!localStorage.getItem('userToken'),
  userToken: localStorage.getItem('userToken'),
};
const AuthContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, userToken: action.payload };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, userToken: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      dispatch({ type: 'LOGIN', payload: userToken });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
