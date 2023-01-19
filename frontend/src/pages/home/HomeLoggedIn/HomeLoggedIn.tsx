import Card from "../../../components/card/Card";
import {Link} from "react-router-dom";
import Button from "../../../components/button/Button";
import style from './HomeLoggedIn.module.scss';

export default function HomeLoggedIn() {
    return (
        <>
            <h1>Welcome back, Username</h1>
            <Card>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <div className={style.ButtonWrapper}>
                    <Link to={"/create-wishlist"}>
                        <Button>Create your own wishlist</Button>
                    </Link>
                    <Link to={"/wishlist-gallery"}>
                        <Button>See all Wishlists</Button>
                    </Link>
                </div>
            </Card>
        </>
    );
}
