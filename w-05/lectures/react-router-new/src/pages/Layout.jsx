import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Outlet, useOutletContext} from 'react-router-dom';
import { useState } from 'react';

function Layout() {
  const [count, setCount] = useState(0);
  return (
  <div>
    <Navbar />
    <Outlet context={{count, setCount}} />
    <Footer />
  </div>

  );
}

export default Layout;
