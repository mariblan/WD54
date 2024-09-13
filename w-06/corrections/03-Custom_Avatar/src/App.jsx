import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Chatbox from "./pages/Chatbox";
import Settings from "./pages/Settings";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Chatbox />} />
    <Route path="/settings" element={<Settings />} />
  </Route>
);
const router = createBrowserRouter(routes);

const App = () => <RouterProvider router={router} />;

export default App;
