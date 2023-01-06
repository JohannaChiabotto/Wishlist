import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/homepage/Home";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
            <Routes>
                    <Route path={""} element={<Home/>}> </Route>
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
