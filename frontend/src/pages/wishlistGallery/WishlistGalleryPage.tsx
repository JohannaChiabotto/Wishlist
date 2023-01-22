import {useCallback, useState} from "react";
import {Wishlist} from "../../model/Wishlist";
import WishlistWrapper from "./wishlistWrapper/WishlistWrapper";
import axios from "axios";
import Card from "../../components/card/Card";


export default function WishlistGalleryPage() {
    const [wishlists, setWishlists] = useState<Array<Wishlist>>([])

    function getWishlist() {
        axios.get("/wishlists")
            .then(response => {
                setWishlists(response.data)
            })
            .catch(console.error)
    }

    const handleDeleteChange = useCallback(() => {
        getWishlist();
    }, []);

    return (<>
            <h1>See all Wishlists</h1>

            {wishlists.length === 0 ? <Card>
                <p>Hey, there are still no wishlist here.<br/>Go and 'Add' and create your first one!</p>
            </Card> : wishlists.map(wishlist =>
                <Card key={wishlist.wishlistId}>
                    <WishlistWrapper key={wishlist.wishlistId}
                                     deleteWishlist={handleDeleteChange}
                                     name={wishlist.name}
                                     wishlistId={wishlist.wishlistId!}
                                     wishes={wishlist.wishes}/>
                </Card>)}
        </>
    )
}

}