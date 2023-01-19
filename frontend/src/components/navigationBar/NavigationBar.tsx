import {NavLink} from "react-router-dom";
import "./NavigationBar.scss";
import {GiPresent} from "react-icons/gi";


export default function NavigationBar(){

    return (
        <div className="nav-bar">
            <span className="logo">


            <GiPresent className="icon"></GiPresent>
                Wishlist
                  </span>

            <div className='nav-wrapper'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/create-wishlist"}>Create-Wishlist</NavLink>
            <NavLink to={"/wishlist-gallery"}>Wishlist-Gallery</NavLink>
            <NavLink to={"/login"} >Login</NavLink>
            <NavLink to={"/logout"} >Logout</NavLink>
            </div>
        </div>
    )
}