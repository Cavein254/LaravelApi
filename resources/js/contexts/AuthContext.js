import React, { useContext } from "react";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);
