import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout'
import ProtectedLayout from './pages/ProtectedRoutes';
import Login from './pages/Login';


const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<div>Home</div>} />
      <Route path="login" element={<Login />} />
      <Route path="protected" element={<ProtectedLayout />}>
        <Route index element={<div>Protected section</div>} />
      </Route>
    </Route>,
  );

  const router = createBrowserRouter(routes);

  const App = () => <RouterProvider router={router} />
  
  export default App