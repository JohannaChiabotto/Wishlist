import {Link} from "react-router-dom";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Container from "../../components/container/Container";

export default function HomePage(){
    return(
        <Container>
            <h1>Welcome to Wishlist</h1>
<Card>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <Link to={"/create-wishlist"}>
                <Button >Create your own wishlist</Button>
            </Link>
            <Link to={"/wishlist-gallery"}>
                <Button >See all Wishlists</Button>
            </Link>
</Card>
        </Container>
    )
}