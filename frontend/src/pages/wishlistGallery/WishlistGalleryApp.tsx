import useWishlist from "../../hooks/useWishlist";
import GetWishlists from "./GetWishlists";

export default function WishlistGalleryApp() {

    const {wishlists, removeWishlist} = useWishlist()

    return (
        <div>
            <h1>Wishlist Gallery</h1>

            <GetWishlists wishlist={wishlists} removeWishlist={removeWishlist}/>

            <div>


            </div>

        </div>
    )
}