import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  // Check if user was previously logged in
  useEffect(() => {
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      const parsedAuth = JSON.parse(savedAuth);
      setIsAuthenticated(true);
      setUser(parsedAuth.user);
    }
  }, []);

  // For demo purposes, we'll just toggle auth status
  // In a real app, this would involve API calls, tokens, etc.
  const login = () => {
    // Mock user for demo
    const mockUser: AuthUser = {
      id: '1',
      name: 'Admin User',
      email: 'admin@newsportal.com',
      role: 'admin'
    };
    
    setIsAuthenticated(true);
    setUser(mockUser);
    
    // Save to localStorage
    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, user: mockUser }));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};