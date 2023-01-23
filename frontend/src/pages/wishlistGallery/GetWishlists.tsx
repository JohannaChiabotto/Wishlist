import {Wishlist} from "../../model/Wishlist";
import {ChangeEvent, useState} from "react";

import WishlistCard from "./WishlistCard";

type WishlistsProps = {
    wishlist: Wishlist []
    removeWishlist: (id: string) => void,
}
export default function GetWishlists(props: WishlistsProps){

    const [searchText, setSearchText] = useState<string>("")

    const filteredWishlists: Wishlist[] = props.wishlist.filter(wishlist => wishlist.name.toLowerCase().includes(searchText.toLowerCase()))

    function onSearchChange(event: any) {
        setSearchText(event.target.value)
    }

    return (


        <div >
            <textarea value={searchText}
                       onChange={onSearchChange}/>

            {filteredWishlists.reverse().map(wishlist => <WishlistCard wishlist={wishlist} key={wishlist.wishlistId}
                                                                 removeWishlist={props.removeWishlist}/>)}
        </div>

    )
}