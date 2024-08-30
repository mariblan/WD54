// You can work here or download the template
// Your components go here
import { useState } from 'react';
import Counter from './components/Counter';
import BtnAll from './components/BtnAll';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div>
      <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} />
      <Counter count={count3} setCount={setCount3} />
      <BtnAll setCount1={setCount1} setCount2={setCount2} setCount3={setCount3} />
    </div>
  );
};

export default App;
