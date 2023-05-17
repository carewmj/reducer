// Based on an example on the following link: https://youtu.be/kK_Wqx3RnHk
// Change 16:51

import React, { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action){
  //reducer returns the new updated state
  // action is what is passed into the dispatch function
  switch (action.type) {
    case  ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case  ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

function App() {
  const [state, dispatch]  = useReducer(reducer, { count: 0});
  // dispatch is what is called to update state

  function increment(){
    dispatch( {type: ACTIONS.INCREMENT})
  }
  function decrement(){
    dispatch( {type: ACTIONS.DECREMENT })
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
