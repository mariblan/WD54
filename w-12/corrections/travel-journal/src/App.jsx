import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthProvider, AppProvider } from "./context";
import { Layout, Home, Login, Register, RequireLogin } from "./pages";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<RequireLogin />}>
      <Route path="home" element={<Home />} />
    </Route>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>
);

const BrowserRouter = createBrowserRouter(routes);

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <RouterProvider router={BrowserRouter} />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
