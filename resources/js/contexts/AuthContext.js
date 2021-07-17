import React, { useContext } from "react";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // const [login, setLogin] = useState(false);
    // const [loading, setLoading] = useState(true);
    // const [user, setUser] = useState(null);
    // const [token, setToken] = useState("");
    // const history = useHistory();

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children};
        </AuthContext.Provider>
    );
};
