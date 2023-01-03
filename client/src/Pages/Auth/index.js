import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Api, LoginPage } from '../../Service/Api';

export const AuthContext = createContext();

export default function Auth({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(
    {
      type: '',
      mensage: '',
    },
  );

  useEffect(() => {
    const handleLocal = localStorage.getItem('User');
    if (handleLocal) {
      setUser(JSON.parse(handleLocal));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try{
      const response = await LoginPage(email, password);
      const userLogin = response.data;
      const { token } = response.data;

      localStorage.setItem('User', JSON.stringify(userLogin.email));
      localStorage.setItem('Token', JSON.stringify(token));
      Api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser({ userLogin });
      return(navigate('/'));
    } catch(error){
      setStatus({
        type: 'Erro',
        mensage: error.response.data,
      });
    }

  }

  const logout = () => {
    localStorage.removeItem('User');
    localStorage.removeItem('Token');
    Api.defaults.headers.Authorization = `Bearer ${null}`;
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{
      authenticated: !!user, user, loading, login, logout, status, setStatus
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}
