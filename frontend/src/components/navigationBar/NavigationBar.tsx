import {NavLink} from "react-router-dom";
import "./NavigationBar.scss";
import {GiPresent} from "react-icons/gi";
import Container from "../container/Container";
import Button from "../button/Button";
import {useCallback, useState} from "react";
import {MdClose, MdOutlineMenu} from "react-icons/md";
import useMobile from "../../hooks/useMobile";


export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const isOnMobile = useMobile();

    const handleOpenChange = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, [])

    return (
        <Container>
            <div className="nav-bar">
                <NavLink to={"/"}>
                    <span className="logo">
                        <GiPresent className="icon"></GiPresent>
                        Wishlist
                    </span>
                </NavLink>

                <Button cssClasses="hamburgerIcon" fixed={true} darkRed={true} onCLickHandler={handleOpenChange}>
                    {isOpen ? <MdClose/> : <MdOutlineMenu/>}
                </Button>

                {(isOpen && isOnMobile || !isOnMobile) ?
                    <ul className='navigation'>
                    <li>
                    <NavLink to={"/create-wishlist"}>Add</NavLink>
                    </li>
                    <li>
                    <NavLink to={"/wishlist-gallery"}>Wishlists</NavLink>
                    </li>
                    <li>
                    <NavLink to={"/login"}>Login</NavLink>
                    </li>
                    <li>
                    <NavLink to={"/login"}>Logout</NavLink>
                    </li>
                    </ul> : null
                }
            </div>
        </Container>
    )
}
