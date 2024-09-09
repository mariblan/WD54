import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Chatbox from './pages/Chatbox';

const routes= createRoutesFromElements(
  <Route path="/" element={<Chatbox />}> 
    {/* <Route path="/chatbox" component={Chatbox} /> */}
  </Route>
)
const router = createBrowserRouter(routes);

const App = () => <RouterProvider router={router} />

export default App;
