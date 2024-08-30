import { useState } from 'react';
import LightBulb from './components/LightBulb';

const App = () => {
  const [isOn, setIsOn] = useState('');

  const handleClick = () => {
    setIsOn(isOn === '' ? 'night' : '');
  };
  return (
    <>
      <button onClick={handleClick}>Switch</button>
      <LightBulb isOn={isOn} />
    </>
  );
};

export default App;
