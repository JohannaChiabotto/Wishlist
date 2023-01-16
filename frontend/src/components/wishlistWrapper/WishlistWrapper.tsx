import {Wishlist} from "../../model/Wishlist";
import React, {useState} from "react";
import axios from "axios";
import {Wish} from "../../model/Wish";
import {NavLink, redirect} from "react-router-dom";


type WishlistProps = {
    name: string,
    wishlistId: string,
    wishes: Array<Wish>,
    deleteWishlist: () => void
}
export default function WishlistWrapper(props: WishlistProps) {

    const [name, setName] = useState('');
    const [wishlist, setWishlist] = useState<Wishlist>(
        {wishlistId: "", name: "", wishes: []},
    );

    const handleRemoveWishlistChange = () => {
        setWishlist((prevWishlist) => {
            return {
                ...prevWishlist,
                wishlistId: ""
            }
        });
    }

    return (
        <div style={{border: '1px solid black', display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <p>{props.name}</p>
            </div>
            <div>
                <NavLink to={"/wishlist"+props.wishlistId}>
                    <button >edit</button></NavLink>
                <button onClick={() => handleRemoveWishlistChange()}>delete</button>
            </div>
        </div>
    )

}