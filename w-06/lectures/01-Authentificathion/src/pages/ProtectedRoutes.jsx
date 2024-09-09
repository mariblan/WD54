import { Outlet, Navigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const ProtectedLayout = () => {
    const { auth, setAuth, admin, setAdmin } = useOutletContext();

    useEffect(() => {
      setAuth(true);
    }, []);
    

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedLayout;