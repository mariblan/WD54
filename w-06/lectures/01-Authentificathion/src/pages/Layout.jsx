
import {
  Link,
  Outlet,
} from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
    const [auth, setAuth] = useState(false);
    const [admin, setAdmin] = useState(false);

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/protected">Protected area</Link>
        </li>
      </ul>
      <div className="container mx-auto">
        <Outlet context={{auth, setAuth, admin,}} />
      </div>
    </>
  );
};

export default Layout;    