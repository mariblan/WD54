import { NavLink, Outlet } from "react-router-dom";
import { SignIn, SignUp, Logout } from ".";
import { useAuth } from "../context";

const Navbar = () => {
  const { isAuth } = useAuth();
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { color: "white", textDecoration: "none" }
                : { color: "red", textDecoration: "none" }
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/films"
            style={({ isActive }) =>
              isActive
                ? { color: "white", textDecoration: "none" }
                : { color: "red", textDecoration: "none" }
            }
          >
            Films
          </NavLink>
          <NavLink
            to="/series"
            style={({ isActive }) =>
              isActive
                ? { color: "white", textDecoration: "none" }
                : { color: "red", textDecoration: "none" }
            }
          >
            Series
          </NavLink>
        </div>
        <div className="navbar-right">
          <h1>
            <a>Netflopy</a>
          </h1>
          {isAuth ? (
            <Logout />
          ) : (
            <>
              <SignIn />
              <SignUp />
            </>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
