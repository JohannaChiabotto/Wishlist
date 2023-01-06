import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import home from "./components/homepage/home";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
            <Routes>
                    <Route path={""} element={<home/>}> </Route>
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
