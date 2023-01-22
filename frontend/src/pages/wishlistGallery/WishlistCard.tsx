import {Wishlist} from "../../model/Wishlist";

type WishlistCardProps = {
    wishlist: Wishlist,
    removeWishlist : (wishlistId: string) => void
}

export default function WishlistCard(props: WishlistCardProps){

    function onDeleteClick(){
        props.removeWishlist(props.wishlist.wishlistId!)
    }
    return (
        <div>
            <section>
                <h1>{props.wishlist.name}</h1>

            </section>
            <button onClick={onDeleteClick}></button>
        </div>
    )
}