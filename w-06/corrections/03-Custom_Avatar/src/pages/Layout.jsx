import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="w-2/3 flex flex-col justify-center items-center">
      <Navbar />
      {/* <div className="w-2/3 flex flex-col"> */}
        <Outlet />
      {/* </div> */}
    </div>
  );
}

export default Layout;
