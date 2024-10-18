import { useState } from "react";
import { useEffect } from "react";
import { checkValidToken } from "../data/auth.js";
import { AuthContext } from ".";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyLogin = async (token) => {
      try {
        const res = await checkValidToken(token);
        if (!res) {
          setError(`${res}`);
          return;
        }
        setUser(res);
        setIsAuth(true);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    token && verifyLogin(token);
    console.log(token);
  }, [token]);

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isAuth,
        setIsAuth,
        logout,
        error,
        message,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
