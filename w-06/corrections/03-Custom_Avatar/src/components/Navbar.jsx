import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-center items-center">
      <ul className="flex justify-center items-center gap-4">
        <li>
          <NavLink to="/">Chatbox</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
