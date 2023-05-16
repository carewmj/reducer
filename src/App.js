// Based on an example on the following link: https://youtu.be/kK_Wqx3RnHk
// useState hook for managing state
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(prevCount => prevCount + 1)
  }
  function decrement(){
    setCount(prevCount => prevCount - 1)
  }
  
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
