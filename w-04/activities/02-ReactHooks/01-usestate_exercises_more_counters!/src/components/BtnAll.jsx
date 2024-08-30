
function BtnAll({ setCount1, setCount2, setCount3 }) {
  const handleIncreaseAll = () => {
    setCount1((prevCount) => prevCount + 1);
    setCount2((prevCount) => prevCount + 1);
    setCount3((prevCount) => prevCount + 1);
  };
  const handleDecreaseAll = () => {
    setCount1((prevCount) => prevCount - 1);
    setCount2((prevCount) => prevCount - 1);
    setCount3((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <button onClick={handleDecreaseAll}>Decrease all</button>
      <button onClick={handleIncreaseAll}>Increase all</button>
    </div>
  );
}

export default BtnAll;
