import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [result, setResult] = useState("0")

  const setnewValue = (value) => {
    setResult(value);
  };

  return (
    <div className='container'>
      <form>
         <input className="input" type='text' value={result}></input>
      </form>
     <div className='buttons'>
      <button onClick={() => setnewValue('7')}>7</button>
      <button onClick={() => setnewValue('8')}>8</button>
      <button onClick={() => setnewValue('9')}>9</button>
      <button onClick={() => setnewValue('4')}>4</button>
      <button onClick={() => setnewValue('5')}>5</button>
      <button onClick={() => setnewValue('6')}>6</button>
      <button onClick={() => setnewValue('1')}>1</button>
      <button onClick={() => setnewValue('2')}>2</button>
      <button onClick={() => setnewValue('3')}>3</button>

    </div>

    </div>

    
  );
}

export default App;
