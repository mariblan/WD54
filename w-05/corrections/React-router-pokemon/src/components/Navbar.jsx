import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
