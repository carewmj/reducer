import React, { useReducer } from 'react'


function reducer(state, action){
  return { count: state.count + 1 };
}

function App() {
  // const [count, dispatch]  = useReducer(reducer, 0);    //this is like useState
  const [state, dispatch]  = useReducer(reducer, { count: 0});
  // dispatch is what is called to update state

  function increment(){
    dispatch( {type: 'increment'})
  }

  function decrement(){
    dispatch( {type: 'decrement' })
  }

  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{state.count}</span>
    <button onClick={increment}>+</button>
    </>
  );
}

export default App;
