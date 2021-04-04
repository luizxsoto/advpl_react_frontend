import { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import apiConfig from '../config/api';
import sessionsStoreService from '../services/sessionsStore';

const INITIAL_STATE = {
  signed: false,
  sessionLoading: false,
  token: {},
};

const SessionContext = createContext(INITIAL_STATE);

export const SessionsProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const sessionData = {
      ...INITIAL_STATE,
      token: JSON.parse(localStorage.getItem('@APP/session:token')) || {},
    };

    if (sessionData?.token?.access_token) {
      apiConfig.defaults.headers.authorization = `Bearer ${sessionData.token.access_token}`;

      sessionData.signed = true;
    }

    return sessionData;
  });

  const signIn = useCallback(async ({ username = '', password = '' }) => {
    setData({ sessionLoading: true });

    try {
      const token = await sessionsStoreService({ username, password });

      apiConfig.defaults.headers.authorization = `Bearer ${token.access_token}`;

      localStorage.setItem('@APP/session:token', JSON.stringify(token));

      setData({ signed: true, token, sessionLoading: false });
    } catch {
      setData({ sessionLoading: false });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@APP/session:token');

    setData(INITIAL_STATE);
  }, []);

  return (
    <SessionContext.Provider
      value={{
        ...data,
        signIn,
        signOut,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSessions = () => {
  const context = useContext(SessionContext);

  if (!context)
    throw new Error('useSessions must be used within an SessionsProvider');

  return context;
};

SessionsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
