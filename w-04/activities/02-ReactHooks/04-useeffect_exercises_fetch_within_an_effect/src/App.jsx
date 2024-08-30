// You can work here or download the template
// Your components go here
import { useState, useEffect } from 'react';
import Todo from './components/Todo';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API)
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 5));
        // console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Fetch within an effect</h1>
      {
        data.map((todo) => (<Todo key={todo.id} todo={todo} />))
      }
    </div>
  );
};

export default App;
