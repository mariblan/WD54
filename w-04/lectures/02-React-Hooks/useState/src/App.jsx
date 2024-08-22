import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState(true);
  const handleClick = () => {
    console.log(count);
    setCount((prevCount) => prevCount + 1);
    setLight((prev) => !prev);
  };

  return (
    <div className={light ? 'light' : 'dark'}>
      <h1>Use State</h1>
      <div className='card'>
        {count === 0 && (
          <div>
            <p>Count is 0</p>
          </div>
        )}
        {count === 1 && (
          <div>
            <p>Count is 1</p>
          </div>
        )}
        <Form />

        <button onClick={handleClick}>
          {light ? 'Light theme' : 'Dark theme'}
        </button>
      </div>
    </div>
  );
}

export default App;
