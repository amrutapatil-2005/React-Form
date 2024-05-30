import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


// function App() {
//   const purple="#8e44ad";
//   const[bg,setBg]=useState(purple);
//   const [name,setName]=useState("Click Me!");
//   const bgChange=()=>{
//     let newBg="#34495e";
//     setBg(newBg);
//     setName("Ouch! 🧕");
    
//   };
//   const bgback=()=>{
//     setBg(purple);
//     setName("Ayyo ....!! 😠")
//   }
//   return (
    
//    <div style={{backgroundColor:bg,height:'100vh'}}>
//     <button onMouseEnter={bgChange} onMouseLeave={bgback}> {name}</button>
//    </div>
//   );
// }

// export default App;








function App() {
  const [name,setName]=useState("");
  const [fullname,setfullName]=useState("");
 
  const inputevent=(event)=>{
    setName(event.target.value);
    
    
    
  }
  const onsubmit=(event)=>{
    setfullName(name);
  }
  
  
  return (
    <div>
    <h1>Hello {fullname}</h1>
    <input type="text" placeholder="Enter Your Name" onChange={inputevent} value={name}/>
    <button onClick={onsubmit}>Submit Me👍</button>
    </div>
    
   
  );
}

export default App;
