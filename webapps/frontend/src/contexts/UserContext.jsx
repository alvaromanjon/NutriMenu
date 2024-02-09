import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const storedUser = localStorage.getItem("usuario-sesion");
    return storedUser ? JSON.parse(storedUser) : { rol: "" };
  });

  useEffect(() => {
    localStorage.setItem("usuario-sesion", JSON.stringify(usuario));
  }, [usuario]);

  const contextData = {
    usuario: usuario,
    setUsuario: setUsuario,
  };

  return <UserContext.Provider value={contextData}>{children}</UserContext.Provider>;
};
