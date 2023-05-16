// Based on an example on the following link: https://youtu.be/kK_Wqx3RnHk
import React, { useReducer } from 'react'

function reducer(state, action){
  switch (action.type) {
    case  'increment':
      return { count: state.count + 1 }
    case  'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
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
