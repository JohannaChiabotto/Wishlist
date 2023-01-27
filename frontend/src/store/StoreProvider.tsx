import {useState} from "react";

import {Wishlist} from "../model/Wishlist";
import {Store} from "./StoreContext";
import {User} from "../model/User";

const StoreProvider = (props: any) => {
    const [user, setUser] = useState<User>();
    const [wishlists, setWishlists] = useState<Array<Wishlist>>([]);

    const handleUsernameChange = (user: User | undefined) => {
        setUser(user);
    }

    const handleWishlistChange = (newWishlist: Wishlist) => {
        setWishlists(prevState => {
            return [...prevState, newWishlist]
        });
    }

    const handleWishlistDeleteChange = (id: string) => {
        setWishlists(prevState => {
            return prevState.filter(wishlist => wishlist.wishlistId !== id);
        });
    }

    const appContext = {
        user: user,
        wishlists: wishlists,
        setUser: handleUsernameChange,
        setWishlist: handleWishlistChange,
        deleteWishlist: handleWishlistDeleteChange
    };

    return (
        <Store.Provider value={appContext}>
            {props.children}
        </Store.Provider>
    )
}

export default StoreProvider;