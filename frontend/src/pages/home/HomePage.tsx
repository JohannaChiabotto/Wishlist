import {Link} from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

export default function HomePage(){
    return(
        <>
            <h1>Description</h1>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <Link to={"/create-wishlist"}>
                <Button text={'Create your own wishlist'}></Button>
            </Link>
            <Link to={"/wishlist-gallery"}>
                <Button text={'See all Wishlists'}></Button>
            </Link>

        </>
    )
}