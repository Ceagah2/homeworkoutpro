import React, { createContext, useContext, useState } from "react";

interface User {
  fullName: string;
  email: string;
  photoUrl?: string;
  isLoggedIn: boolean;
}

interface UserContextProps {
  user: User | null;
  login: (userInfo: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userInfo: User) => {
    setUser({ ...userInfo, isLoggedIn: true });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
