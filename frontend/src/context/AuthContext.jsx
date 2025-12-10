import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localToken = localStorage.getItem("token");
  const [token, setToken] = useState(localToken || "");

  const login = (t) => {
    setToken(t);
    localStorage.setItem("token", t);
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
