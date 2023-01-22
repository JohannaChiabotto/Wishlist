import {Wishlist} from "../../model/Wishlist";
import {ChangeEvent, useState} from "react";
import {Grid, TextField} from "@mui/material";
import WishlistCard from "./WishlistCard";

type WishlistsProps = {
    wishlist: Wishlist []
    removeWishlist: (id: string) => void,
}
export default function GetWishlists(props: WishlistsProps){

    const [searchText, setSearchText] = useState<string>("")

    const filteredWishlists: Wishlist[] = props.wishlist.filter(wishlist => wishlist.name.toLowerCase().includes(searchText.toLowerCase()))

    function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }

    return (


        <Grid item xs={12} sm={6}>
            <TextField margin="normal" value={searchText} size="small" label="Search" fullWidth variant="outlined"
                       onChange={onSearchChange}/>

            {filteredWishlists.reverse().map(wishlist => <WishlistCard wishlist={wishlist} key={wishlist.wishlistId}
                                                                 removeWishlist={props.removeWishlist}/>)}
        </Grid>

    )
}