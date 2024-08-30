import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Layout from './pages/Layout';
import Students from './pages/Students';
import OneStudent from './pages/OneStudent';

function App() {
  const [count, setCount] = useState(0);

  const students = [
    { name: 'John', id: 1 },
    { name: 'Jane', id: 2 },
    { name: 'Doe', id: 3 },
  ];

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/students' element={<Students students={students} />} />
        <Route
          path='/students/:id'
          element={<OneStudent students={students} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
