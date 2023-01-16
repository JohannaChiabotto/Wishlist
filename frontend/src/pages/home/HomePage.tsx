import {Link} from "react-router-dom";
import Button from "../../components/button/Button";

export default function HomePage(){
    return(
        <div>
            <p>Description</p>
            <Link to={"/create-wishlist"}>
                <Button text={'Create your own wishlist'}></Button>
            </Link>
            <Link to={"/wishlist-gallery"}>
                <Button text={'See all Wishlists'}></Button>
            </Link>

        </div>
    )
}