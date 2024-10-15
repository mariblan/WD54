import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { register } from "../DB/fetchDB";

function Register({isAuth, setIsAuth, setToken}) {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.username || !user.email || !user.password) {
      setError("Please fill all fields");
      return;
    }
    if (!user.username.match(/^[a-zA-Z0-9]{3,30}$/)) {
      setError("Username must have 3-30 alphanumeric characters");
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
    const data = await register(user);
    if (!data) {
      setError(`${data}`);
      return;
    }
    if(data.token){
      setToken(data.token);
      setSuccess(data.message);
      setIsAuth(true);
      localStorage.setItem("token", data.token);
      
      return;
    }
  };
  if(isAuth) return <Navigate to="/dashboard" />;
  else return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.username}
            onChange={handleChange}
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
      <span className="changeAuth">
        Already have an account?
        <button onClick={() => navigate("/login")}>Log in</button>
      </span>
    </div>
  );
}

export default Register;
