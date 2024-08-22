import './App.css';
import Navbar from './components/Navbar';


function App() {
  const hello = "Hello, React!";


  return (
    <>
      <h1>{hello ? hello : "Hello all" }</h1>
      <Navbar />

    </>
  );
}

export default App;
