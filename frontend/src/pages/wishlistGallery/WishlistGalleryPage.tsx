import {useState} from "react";
import {Wishlist} from "../../model/Wishlist";
import WishlistWrapper from "../../components/wishlistWrapper/WishlistWrapper";
import axios from "axios";
import Card from "../../components/card/Card";
import {WishStatus} from "../../model/WishStatus";

export default function WishlistGalleryPage(){
    const [wishlists, setWishlists] = useState<Array<Wishlist>>([
        { wishlistId: "id1", name: "Samu", wishes: [
                {name: 'Pi', status: WishStatus.FREE, wishId: '123'},
                {name: 'Pa', status: WishStatus.BOUGHT, wishId: '1234'},
                {name: 'Po', status: WishStatus.FREE, wishId: '456'},
                {name: 'Pe', status: WishStatus.BOUGHT, wishId: '768'},
                {name: 'Pu', status: WishStatus.FREE, wishId: '123w'},
            ]},
        { wishlistId: "id2", name: "Elli", wishes: [
                {name: 'Pi', status: WishStatus.FREE, wishId: '123'},
                {name: 'Pa', status: WishStatus.FREE, wishId: '1234'},
                {name: 'Po', status: WishStatus.RESERVE, wishId: '456'},
                {name: 'Bubu', status: WishStatus.FREE, wishId: '768'},
                {name: 'Baba', status: WishStatus.BOUGHT, wishId: '123w'},
                {name: 'Bebe', status: WishStatus.BOUGHT, wishId: '1234w'},
                {name: 'Bibi', status: WishStatus.RESERVE, wishId: '456w'},
                {name: 'Bobo', status: WishStatus.BOUGHT, wishId: '768w'}
            ]},
        { wishlistId: "id3", name: "Raphaela", wishes: [
                {name: 'Pi', status: WishStatus.FREE, wishId: '123'},
                {name: 'Pa', status: WishStatus.RESERVE, wishId: '1234'},
                {name: 'Po', status: WishStatus.RESERVE, wishId: '456'},
                {name: 'Peppa', status: WishStatus.RESERVE, wishId: '768'},
                {name: 'Schorsh', status: WishStatus.BOUGHT, wishId: '123w'},
                {name: 'Wutz', status: WishStatus.FREE, wishId: '1234w'},
            ]},
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