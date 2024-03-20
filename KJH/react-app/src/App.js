import "./App.css"
import React,{useEffect, useState} from 'react';

// useEffect
/**
 * 
 * mount
 * unmount
 * update
 * 
 */


// 1. 최상위에서 호출되야한다.
// 2. 오직 react에서만 hook을 호출해야한다.

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => console.log('hello'));

  useEffect(()=> {
    if(count===5){
      console.log("this is five")
    }
  },[count]);

  return (<div className="App">
    <span>{count}</span>
    <button onClick={() => setCount(count +1)}>+</button>


  </div>
  )
}

export default App
