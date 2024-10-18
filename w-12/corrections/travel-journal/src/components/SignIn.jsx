import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/login")}>SignIn</button>;
}

export default SignIn;
