import React, { useEffect, useReducer } from "react";
import { AppRouter } from "./routers/AppRouter";
// Importar el context:
import { AuthContext } from "./auth/authContext";
// Importar el reducer:
import { authReducer } from "./auth/authReducer";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user")) || {
      logged: false,
      name: "Usuario",
    }
  );
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;

    // Si no existe el usuario guardar en localStorage:
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    // Higher order component AuthContext.
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
