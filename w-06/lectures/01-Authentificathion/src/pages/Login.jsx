import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

  return (
    <div>
        <h2>Login</h2>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate('/protected')}>Login</button>
        <button onClick={() => navigate(1)}>Forward</button>
    </div>
  )
}

export default Login