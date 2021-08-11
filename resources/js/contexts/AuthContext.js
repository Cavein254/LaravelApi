import React, { useContext } from "react";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    function setAppToken(token) {
        sessionStorage.setItem("token", JSON.stringify(token));
    }
    function getAppToken() {}
    return (
        <AuthContext.Provider value={value}>
            {!loading && children};
        </AuthContext.Provider>
    );
};
