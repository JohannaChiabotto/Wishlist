import {useState} from "react";
import {Wishlist} from "../../model/Wishlist";
import WishlistWrapper from "../../components/wishlistWrapper/WishlistWrapper";
import axios from "axios";

export default function WishlistGalleryPage(){
    const [wishlists, setWishlists] = useState<Array<Wishlist>>([
        { wishlistId: "id1", name: "Samu", wishes: []},
        { wishlistId: "id2", name: "Elli", wishes: []},
        { wishlistId: "id3", name: "Raphaela", wishes: []},
    ])
    function getWishlist(){
        axios.get("/wishlists")
            .then(response =>{
                setWishlists(response.data)
            })
            .catch(console.error)
    }

    function handleDeleteChange(){
        getWishlist();
    }

    return( <div>
        <p>See all Wishlists</p>

            {wishlists.map(wishlist => <WishlistWrapper key={wishlist.wishlistId} deleteWishlist={handleDeleteChange} name={wishlist.name} wishlistId={wishlist.wishlistId!} wishes={wishlist.wishes}></WishlistWrapper> )}
        </div>
    )

}