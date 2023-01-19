import React from 'react';
import Home from "./pages/home/Home";
import NavigationBar from "./components/navigationBar/NavigationBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WishlistGalleryPage from "./pages/wishlistGallery/WishlistGalleryPage";
import EditWishlistPage from "./pages/editWishlistPage/EditWishlistPage";
import Container from "./components/container/Container";
import GithubRedirectPage from "./pages/createWishlist/githubRedirectPage/GithubRedirectPage";
import LoginOrRegister from "./pages/loginOrRegister/LoginOrRegister";
import CreateWishlistPage from "./pages/createWishlist/CreateWishlistPage";

function App() {
    return (
        <BrowserRouter>
            <NavigationBar></NavigationBar>
            <Container>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/create-wishlist"} element={<CreateWishlistPage/>}/>
                    <Route path={"/wishlist-gallery"} element={<WishlistGalleryPage/>}/>
                    <Route path={"/wishlist/:id"} element={<EditWishlistPage/>}/>
                    <Route path={"/login"} element={<LoginOrRegister/>}/>
                    <Route path={"*"} element={<Home/>}/>
                    <Route path={"/users/oauth/github"} element={<GithubRedirectPage/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
