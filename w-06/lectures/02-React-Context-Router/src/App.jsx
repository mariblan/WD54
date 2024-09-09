import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import { AuthContextProvider } from './context/AuthContext';
import { AppContextProvider } from './context/AppContext';
import { AppContextLayout } from './components/AppContextLayout';

function App() {

  return (
    <>
    <Link to={"/app"}>App</Link>
    <Link to={"/about"}>About</Link>
    <AuthContextProvider>
    <AppContextProvider>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/app" element={<AppContextLayout />}>
      <Route path="/app" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Route>
    <Route path="/about" element={
      <AppContextProvider>
        <AboutUs />
      </AppContextProvider>
      }>
    </Route>
    </Routes>
    </AppContextProvider>
    </AuthContextProvider>
    </>
  )
}

export default App
