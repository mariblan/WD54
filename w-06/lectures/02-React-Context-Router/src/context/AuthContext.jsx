import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return(
        <AuthContext.Provider value={{user, setUser, token, setToken, isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, useAuth};