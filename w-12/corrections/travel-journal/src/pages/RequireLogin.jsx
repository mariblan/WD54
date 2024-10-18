import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context";

const RequireLogin = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireLogin;
