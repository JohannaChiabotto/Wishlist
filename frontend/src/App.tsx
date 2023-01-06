import React from 'react';
import './App.css';
import Home from "./components/homepage/Home";
import NavigationBar from "./components/homepage/NavigationBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
        <BrowserRouter>
            <NavigationBar></NavigationBar>
            <Routes>
                    <Route path={"/"} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
