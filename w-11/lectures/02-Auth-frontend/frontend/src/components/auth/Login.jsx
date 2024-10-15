import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../DB/fetchDB";

function Login({ isAuth, setIsAuth, setToken }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      setError("Please fill all fields");
      return;
    }
    
    if (!user.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Invalid email");
      return;
    }
    if (!user.password.match(/^[a-zA-Z0-9]{6,30}$/)) {
      setError("Password must have 6-30 alphanumeric characters");
      return;
    }

    const data = await login(user);
    if (!data) {
      setError(`${data}`);
      return;
    }
    if (data.token) {
      setToken(data.token);
      setSuccess(data.message);
      setIsAuth(true);
      localStorage.setItem("token", data.token);
      return;
    }
  };

  if (isAuth) return <Navigate to="/dashboard" />;
  else return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <span className="changeAuth">
        Don't have an account yet?
        <button onClick={() => navigate("/register")}>Register</button>
      </span>
    </div>
  );
}

export default Login;
