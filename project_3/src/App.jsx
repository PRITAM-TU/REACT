
import { useState } from "react"
import './index.css';

function App() {
  let [Count,setCount]=useState(0);
  const addNumber=()=>{
    setCount(Count+1);
  }
  const remoeNumber=()=>{
    if(Count!=0)
      setCount(Count-1);
  }


  
  return (
    <>
    <h1>pritam tung</h1>
    <h1>count ={Count}</h1>
    <button onClick={addNumber}>add number one puls:{Count}</button>
    <button onClick={remoeNumber}>remove number one by one can't negative :{Count}
    </button>
    </>
  )
}

export default App
