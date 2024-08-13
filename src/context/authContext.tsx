import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  user: { name: string } | null;
  // Add login/logout functions if needed
  setLoggedIn: (user: { name: string }) => void;
  setLoggedOut: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  setLoggedIn: () => {},
  setLoggedOut: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
 
  const setLoggedIn = (newUser: { name: string }) => {
    console.log('setLoggedIn called with:', newUser);
    setIsLoggedIn(true);
    setUser(newUser);
  };

  const setLoggedOut = () => {
    setIsLoggedIn(false);
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, setLoggedIn, setLoggedOut }}>
      {children}
    </AuthContext.Provider>
  );
};