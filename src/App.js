// 0.
// import React, { useState } from 'react'
// 1.
import React, { useReducer } from 'react'
// 2.
//import React, { useState, useReducer } from 'react'


function reducer(){
//function reducer(state, action){
  // reducer returns the new updated state
  // action is what is passed into the dispatch function
  // 1. 
  //return { count: state.count +1 } // each call to dispatch will increment the count by 1
  // switch (action.type) {
  //   case  'increment':
  //     return { count: state.count + 1 }
  //   case  'deccrement':
  //     return { count: state.count - 1 }
  //   default:
  //     return state
  // }
  //return { count: state.count + 1 }
  //return count + 1 ;
}

function App() {
  // 0.
  // const [count, setCount] = useState(0);
  // 1.
  function reducer(){
    return count + 1 ;
  }
  const [count, dispatch]  = useReducer(reducer, 0);    //could define this like useState
  //const [state, dispatch]  = useReducer(reducer, { count: 0});
  // dispatch is what is called to update state

  function reducer(){
    return count + 1 ;
  }

  function increment(){
    // 0.
    // setCount(prevCount => prevCount + 1)
    // 1. 
    dispatch()
    // 2.
    // dispatch( {type: 'increment'})
  }
  function decrement(){
    // 0.
    //setCount(prevCount => prevCount - 1)
    // 1.
    // ...
    // 2. 
    // dispatch( {type: 'decrement' })
  }
  // 4. Constant Action references 
  // const ACTIONS = {
  //   INCREMENT: 'increment',
  //   DECREMENT: 'decrement'
  // }


  
  
  return (
    <>
    <button onClick={decrement}>-</button>
    {/* 0. */}
    <span>{count}</span>

    {/* 1 & 2.
    <span>{state.count}</span> */}
    <button onClick={increment}>+</button>
    </>
  );
}

export default App;
