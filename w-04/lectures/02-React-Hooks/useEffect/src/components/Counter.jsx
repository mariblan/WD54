// import { useState } from 'react';
import Paragraph from "./Paragraph";

function Counter({count, setCount}) {
//   console.log(dev);
//   const {count, setCount} = dev;
  // const [count1, setCount1] = useState(1);
  return (
    <div className='card'>
      <button onClick={() => setCount((count) => count + 1)}>
       <Paragraph count={count} />
      </button>
    </div>
  );
}

export default Counter;
