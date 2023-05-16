// Based on an example on the following link: https://youtu.be/kK_Wqx3RnHk
import React, { useReducer } from 'react'

function reducer(count, action){
  // reducer returns the new updated state
  // action is what is passed into the dispatch function
  // in this simple example 'action' is ignored
  return count + 1 // each call to dispatch will increment the count by 1
}

function App() {

  const [count, dispatch]  = useReducer(reducer, 0);    //could define this like useState
  
  // dispatch is what is called to update state

  // increment is the '+' button click handler
  function increment(){
    dispatch()
  }

  // decrement is the '-' button click handler
  function decrement(){
    // this does nothing at the moment!
  }

  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    </>
  );
}

export default App;
