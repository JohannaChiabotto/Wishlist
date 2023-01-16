import {Link} from "react-router-dom";

export default function HomePage(){
    return(
        <div>
            <p>Description</p>
            <Link to={"/create-wishlist"}>
                <button> Create your own wishlist</button>
            </Link>
            <Link to={"/wishlist-gallery"}>
                <button> See all Wishlists</button>
            </Link>

        </div>
    )
}