// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserDataContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "", // Fix casing here
    },
  });

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
