import { useState, useEffect } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [count1, setCount1] = useState(1);

  // const [count2, setCount2] = useState(0);

  // useEffect(() => {
  //   const myInterval = setInterval(() => {
  //     console.log('count1', count1);
  //   }, 2000);
  //   return () => {
  //     clearInterval(myInterval);
  //   };
  // }, []);

  // useEffect(() => {
  //   setCount2(count1);
  //   console.log('Hello');
  // }, [count1]);

  useEffect(() => {
    fetch(`https://dummyjson.com/todos/${count1}`)
      .then((res) => res.json())
      .then(console.log);
  }, [count1]);

  return (
    <>
      <h1>Vite + React</h1>
      <Counter count={count1} setCount={setCount1} hello="hello"  />
    </>
  );
}


export default App;
