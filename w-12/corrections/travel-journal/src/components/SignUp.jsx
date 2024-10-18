import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/register")}>SignIn</button>;
}

export default SignUp;
