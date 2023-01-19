import React from "react";
import axios from "axios";
import {Wish} from "../../model/Wish";
import {NavLink} from "react-router-dom";
import Button from "../button/Button";
import './wishlistwrapper.scss';


type WishlistProps = {
    name: string,
    wishlistId: string,
    wishes: Array<Wish>,
    deleteWishlist: () => void
}
export default function WishlistWrapper(props: WishlistProps) {

    const id = props.wishlistId;

    const handleRemoveWishlistChange = () => {
        axios.delete(`/wishlist/${id}`)
            .then(()=> {
                props.deleteWishlist();
            }).catch(console.error)
    }

    return (
        <div className="wrapper">
                <h2>{props.name}</h2>

            <div className="buttonWrapper">
                <NavLink to={"/wishlist"+props.wishlistId}>
                    <Button >edit</Button>
                </NavLink>
                <Button onClick={() => handleRemoveWishlistChange()}>delete</Button>
            </div>
        </div>
    )

}