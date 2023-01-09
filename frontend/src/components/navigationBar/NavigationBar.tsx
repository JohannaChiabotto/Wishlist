import {NavLink} from "react-router-dom";
import "./NavigationBar.scss";

//type NavigationBarProps = {
//    logout: () => Promise<string>}


export default function NavigationBar(){

    return (
        <div className="nav-bar">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/create-wishlist"}>Create-Wishlist</NavLink>
            <NavLink to={"/wishlist-gallery"}>Wishlist-Gallery</NavLink>
            <NavLink to={"/login"} >Login</NavLink>
            <NavLink to={"/logout"} >Logout</NavLink>
        </div>
    )
}