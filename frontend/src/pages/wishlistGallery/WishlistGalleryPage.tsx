import {useCallback, useContext,} from "react";
import WishlistWrapper from "./wishlistWrapper/WishlistWrapper";
import axios from "axios";
import Card from "../../components/card/Card";
import {Store} from "../../store/StoreContext";


export default function WishlistGalleryPage() {
    const store = useContext(Store);

    const handleDeleteChange = useCallback((id: string) => {
        axios.delete(`/api/wishlist/${id}`)
            .then(() => {
                    store.deleteWishlist(id);
                }
            )
            .catch(console.error)
    }, [store]);


    return (<>
            <h1>See all Wishlists</h1>

            {store.wishlists.length === 0 ? <Card>
                <p>Hey, there are still no wishlist here.<br/>Go and 'Add' and create your first one!</p>
            </Card> : store.wishlists.map(wishlist =>
                <Card key={wishlist.wishlistId!}>
                    <WishlistWrapper key={wishlist.wishlistId!}
                                     deleteWishlist={handleDeleteChange}
                                     name={wishlist.name}
                                     wishlistId={wishlist.wishlistId!}
                                     wishes={wishlist.wishes}/>
                </Card>)}
        </>
    )
}
