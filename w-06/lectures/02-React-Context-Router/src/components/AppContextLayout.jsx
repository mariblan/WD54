import { Outlet, Link, } from "react-router-dom";
import { useState } from "react";
function AppContextLayout() {
    const [state, setState] = useState(null);
    const [counter, setCounter] = useState(0);
  return (
    <div>
         <Link to={"/app"}>App</Link>
         <Link to={"/about"}>About</Link>
            <Outlet context={{state, setState, counter, setCounter}} />
    </div>
  )
}

export default AppContextLayout