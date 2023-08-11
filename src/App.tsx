import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  // const count = 999;
  const [count, setCount] = useState(999);
  const handClick = () => {
    setCount(count + 1);
  }

  return <span className='likeButton' onClick={handClick}>♥ {count}</span>
}

export default App;
