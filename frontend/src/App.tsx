import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import NavigationBar from "./components/navigationBar/NavigationBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddWishlist from "./pages/createWishlist/AddWishlist";

function App() {
  return (
        <BrowserRouter>
            <NavigationBar></NavigationBar>
            <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/create-wishlist"} element={<AddWishlist/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
