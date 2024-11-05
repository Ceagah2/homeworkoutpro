import { getClerkInstance } from "@clerk/clerk-expo";
import React, { createContext, useContext, useState } from "react";
import { User } from "./userContext.interface";

interface UserContextProps {
  userData: User | null;
  login: (userInfo: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<User | null>(null);

  const login = (userInfo: User) => {
    setUserData({ ...userInfo, isLoggedIn: true });
  };

  const logout = async () => {
    setUserData(null);
    const clerkInstance = getClerkInstance();
    await clerkInstance.signOut();
  };


  return (
    <UserContext.Provider value={{ userData, login, logout }}>
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
