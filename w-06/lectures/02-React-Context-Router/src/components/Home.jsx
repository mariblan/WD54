// import { useAuth } from '../context/AuthContext';
import { useOutletContext } from "react-router-dom"
function Home() {
    // const { user, setUser, token, setToken, isAuthenticated, setIsAuthenticated } = useAuth();
    // console.log(user, token, isAuthenticated);
    const {state, setState, counter, setCounter} = useOutletContext();
  return (
    <div>Home</div>
  )
}

export default Home