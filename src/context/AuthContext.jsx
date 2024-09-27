import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Par défaut, aucun utilisateur connecté
  const navigate = useNavigate();

  useEffect(() => {
    // Récupérer l'utilisateur stocké localement à partir de localStorage (si déjà connecté)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // On met à jour l'état avec les informations stockées
    }
  }, []);

  const login = (email, role) => {
    const newUser = { email, role };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser)); // Stocker dans localStorage
    navigate('/dashboard'); // Redirection après connexion réussie
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login"); // Redirection après déconnexion
  };

  const isAdmin = () => {
    return user?.role === "admin"; // Vérifie si l'utilisateur est admin
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
