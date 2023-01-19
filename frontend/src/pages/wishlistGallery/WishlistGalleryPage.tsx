import {useState} from "react";
import {Wishlist} from "../../model/Wishlist";
import WishlistWrapper from "../../components/wishlistWrapper/WishlistWrapper";
import axios from "axios";
import Card from "../../components/card/Card";

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
        <h1>See all Wishlists</h1>

            {wishlists.map(wishlist => <Card><WishlistWrapper key={wishlist.wishlistId} deleteWishlist={handleDeleteChange} name={wishlist.name} wishlistId={wishlist.wishlistId!} wishes={wishlist.wishes}></WishlistWrapper></Card> )}
        </div>
    )

}