import {Wishlist} from "../model/Wishlist";
import React from "react";
import {User} from "../model/User";

interface StoreContext {
    user: User | undefined;
    wishlists: Array<Wishlist>
    setUser: (user: User | undefined) => void;
    setWishlist: (newWishlist: Wishlist) => void;
    deleteWishlist: (id: string) => void;
    changeWishlist: (id: string, list:Wishlist) => void;
}

export const contextDefault: StoreContext = {
    user: undefined,
    wishlists: [],
    setUser: (user: User | undefined) => {
    },
    setWishlist: (newWishlist: Wishlist) => {
    },
    deleteWishlist: (id: string) => {
    },
    changeWishlist: (id: string, list:Wishlist) => {

    }
}

export const Store = React.createContext(contextDefault);