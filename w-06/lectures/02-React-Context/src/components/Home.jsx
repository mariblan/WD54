import { useAuth } from '../context/AuthContext';

function Home() {
    const { user, setUser, token, setToken, isAuthenticated, setIsAuthenticated } = useAuth();
    console.log(user, token, isAuthenticated);
  return (
    <div>Home</div>
  )
}

export default Home