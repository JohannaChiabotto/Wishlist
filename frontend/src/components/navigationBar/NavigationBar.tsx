import {NavLink, useNavigate} from "react-router-dom";
import "./NavigationBar.scss";
import {GiPresent} from "react-icons/gi";
import Container from "../container/Container";
import Button from "../button/Button";
import {useCallback, useContext, useState} from "react";
import {MdClose, MdOutlineMenu} from "react-icons/md";
import useMobile from "../../hooks/useMobile";
import axios from "axios";
import {Store} from "../../store/StoreContext";

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const isOnMobile = useMobile();
    const navigate = useNavigate();
    const store = useContext(Store);

    const handleOpenChange = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, [])

    const handleLogoutChange = () => {
        console.log('ich willl mich ausloggen');
        axios.post("/api/users/logout")
            .then((result) => {
                console.log(result);
                store.setUser(undefined);
                navigate('/login');
                return result;
            })
            .catch(error => console.log(error))
    }

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

                {((isOpen && isOnMobile) || !isOnMobile) ?
                    <ul className='navigation'>
                        {store.user ? <>
                                <li>
                                    <NavLink to={"/create-wishlist"}>Add</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/wishlist-gallery"}>
                                        {store.wishlists.length > 0 ? store.wishlists.length : null} Wishlists</NavLink>
                                </li>

                                <li onClick={handleLogoutChange}>
                                    <NavLink to={"/login"}>Logout</NavLink>
                                </li>
                            </>
                            :
                            <li>
                                <NavLink to={"/login"}>Login</NavLink>
                            </li>}
                    </ul> : null
                }
            </div>
        </Container>
    )
}
