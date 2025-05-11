import { useState } from 'react';
import './App.css'


function App() {
  
  let [Count,setCounter]=useState(15);
  const Inc=document.querySelector('#add');
  const Dec=document.querySelector('#remove');
  let Counter=()=>{
    if(Count<20){
      console.log(Count);
      Count+=1;
    }else{
      alert("don't cross limit");
    }
    setCounter(Count);
  }
  let deCounter=()=>{
    if(Count>0){

      Count-=1;
    }else{
      alert("no negative number");
    }
    setCounter(Count);
  }
  
  return (
    <>
      
      <h1>Ritesh</h1>
      <h2>Your Number Is :{Count}</h2>
      <button onClick={Counter} id='add'>Add</button>
      <button onClick={deCounter} id='remove'>Remove</button>
      
    </>
  )
}

export default App
