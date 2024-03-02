import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Welcome from './Welcome';
import Login from './Login';


const App = () => {

  const [userName,setUserName]=useState()
  const handleUserName=(userName)=>{
     setUserName(userName);
  }
  
  return (
    <>
      <Routes>
      <Route path="/welcome" element={<Welcome userName={userName} />} />
      <Route path="/" element={<Login handleUserName={handleUserName} />} />
      </Routes>
    </>
    
  )
}

export default App