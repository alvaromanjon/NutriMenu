import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  let contextData = {
    user: user,
    setUser: setUser,
  };

  return <UserContext.Provider value={contextData}>{children}</UserContext.Provider>;
};
