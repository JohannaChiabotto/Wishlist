import {NavLink} from "react-router-dom";
import "./NavigationBar.scss";
import {GiPresent} from "react-icons/gi";
import Container from "../container/Container";


export default function NavigationBar(){

    return (
        <Container>
        <div className="nav-bar">
            <span className="logo">
                <GiPresent className="icon"></GiPresent>
                Wishlist
            </span>

            <div className='nav-wrapper'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/create-wishlist"}>Add</NavLink>
            <NavLink to={"/wishlist-gallery"}>Wishlists</NavLink>
            <NavLink to={"/wishlistid"}>single id</NavLink>
            <NavLink to={"/login"} >Login</NavLink>
            <NavLink to={"/logout"} >Logout</NavLink>
            </div>
        </div>
        </Container>
    )
}
