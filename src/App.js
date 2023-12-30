import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ParticlesjsBackground from "./components/ParticlesjsBackground";
import CoreComm from "./components/CoreComm";
import CoreComm23 from "./components/CoreComm23";


import Preloader from "./components/Pre";
import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}
      style={{position:"relative",}}>
    
    <ParticlesjsBackground/>

      <NavBar/>
      
      <Routes>
      <Route index ='/' element={<Home/>} />
      <Route path="2022-23" element={<CoreComm />} />
      <Route path="2023-24" element={<CoreComm23 />} />
      </Routes> 
    
     
    </div>
  </BrowserRouter>
  );
}

export default App;