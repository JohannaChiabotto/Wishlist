import {NavLink} from "react-router-dom";

//type NavigationBarProps = {
//    logout: () => Promise<string>}


export default function NavigationBar(){

    return (
        <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/create-wishlist"}>Create Wishlist</NavLink>
            <NavLink to={"/wishlist-gallery"}>Wishlist Gallery</NavLink>
            <NavLink to={"/login"} >Login</NavLink>
        </div>
    )
}