import {useOutletContext} from 'react-router-dom';

function Home() {
  const {count, setCount} = useOutletContext();
  return (
    <div>Home</div>
  )
}

export default Home;