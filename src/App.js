import React, { useReducer } from 'react'

function reducer(count, action){
  // reducer returns the new updated state
  // action is what is passed into the dispatch function
  return count + 1 // each call to dispatch will increment the count by 1

}

function App() {

  const [count, dispatch]  = useReducer(reducer, 0);    //could define this like useState
  //const [state, dispatch]  = useReducer(reducer, { count: 0});
  // dispatch is what is called to update state

  // increment is the '+' button click handler
  //
  function increment(){
    dispatch()
  }

  function decrement(){
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
