import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import { AuthContextProvider } from './context/AuthContext';
import { AppContextProvider } from './context/AppContext';



function App() {

  return (
    <AuthContextProvider>
     <Home />
    <AppContextProvider>
    <AboutUs />
     </AppContextProvider>
    </AuthContextProvider>
  )
}

export default App
