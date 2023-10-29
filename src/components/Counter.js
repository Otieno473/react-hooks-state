import React,{useState} from "react";
const Counter=()=>{
      const [count,setcount]=useState(0);
  function increment(){
    setcount((currentCount)=>currentCount+1);
    setcount((currentCount)=>currentCount+2);
    
  
  }
  return(
    <button onClick={increment}>I have been clicked {count}times</button>
  )
}

export default Counter;
