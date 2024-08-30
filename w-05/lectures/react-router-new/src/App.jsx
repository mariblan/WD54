import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useOutletContext,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './Layout';

const routes1 = [{ path: '/', element: <Home /> }, { path: '/about' }];

const routes2 = createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
  </Route>
);

const router = createBrowserRouter(routes2);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
