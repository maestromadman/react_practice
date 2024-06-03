import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0); // use___ = "hook"; call 2nd var same as first but add "set" 

  return (
    <> 
      <div className= "App">  
        <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
      </div>
    </>
  )
}

export default App
