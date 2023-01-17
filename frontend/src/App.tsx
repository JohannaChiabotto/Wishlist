import React from 'react';
import HomePage from "./pages/home/HomePage";
import NavigationBar from "./components/navigationBar/NavigationBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddWishlist from "./pages/createWishlist/addWishlist/AddWishlist";
import WishlistGalleryPage from "./pages/wishlistGallery/WishlistGalleryPage";
import EditWishlistPage from "./pages/editWishlistPage/EditWishlistPage";
import Container from "./components/container/Container";

function App() {
    return (
        <BrowserRouter>
            <NavigationBar></NavigationBar>
            <Container>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/create-wishlist"} element={<AddWishlist/>}/>
                    <Route path={"/wishlist-gallery"} element={<WishlistGalleryPage/>}/>
                    <Route path={"/wishlistid"} element={<EditWishlistPage/>}/>
                    <Route path={"*"} element={<HomePage/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
