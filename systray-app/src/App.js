import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Config from './Components/Config';
import NotFound from "./Components/NotFound";

function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={ <Home/> }/>
    <Route exact path="/config" element={<Config/>} />
    <Route path="*" component={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;