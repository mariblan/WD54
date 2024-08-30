import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/home'
            style={({ isActive }) => ({ color: isActive ? 'purple' : 'blue' })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            style={({ isActive }) => ({ color: isActive ? 'purple' : 'blue' })}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            style={({ isActive }) => ({ color: isActive ? 'purple' : 'blue' })}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/students'
            style={({ isActive }) => ({ color: isActive ? 'purple' : 'blue' })}
          >
            Students
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
