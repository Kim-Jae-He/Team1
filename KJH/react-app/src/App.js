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
