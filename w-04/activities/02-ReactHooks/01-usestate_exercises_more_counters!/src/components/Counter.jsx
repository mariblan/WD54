
function Counter({ count, setCount }) {
  const handleMinus = () => {
    setCount((count) => count - 1);
  };
  const handlePlus = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <p>{count}</p>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default Counter;
