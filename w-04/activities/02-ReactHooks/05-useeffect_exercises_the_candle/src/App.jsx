// You can work here or download the template
import { useState, useEffect } from 'react';

const Candle = () => {
  const [candleHeight, setCandleHeight] = useState(90);
  const [isLit, setIsLit] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCandleHeight((prev) => {
        if (prev >= 10) {
          return prev - 10;
        } else {
          clearInterval(interval);
        }
      });
    }, 500);

    candleHeight <= 10 && clearInterval(interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='exercise'>
      <div className='candleContainer'>
        <div
          className='candle'
          style={{
            display: isLit ? 'block' : 'none',
            height: `${candleHeight}%`,
          }}
        >
          <div className='flame'>
            <div className='shadows' />
            <div className='top' />
            <div className='middle' />
            <div className='bottom' />
          </div>
          <div className='wick' />
          <div className='wax' />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <Candle />;
};

export default App;
