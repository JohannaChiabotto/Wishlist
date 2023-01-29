import Card from "../../components/card/Card";
import style from "./Home.module.scss";
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";
import {useContext} from "react";
import {Store} from "../../store/StoreContext";

export default function Home() {
    const store = useContext(Store)
    return (
        <>
            {store.user ? <h1>Welcome back, {store.user.username}</h1> : <h1>Welcome on the Whishlist App!</h1>}

            <Card>
                <p>Hello dear friends and family!
                    How nice that you want to create a list for us to make gift giving even more fun!
                    I'm really looking forward to the next birthdays and Christmas to be able to use this great app!
                    PS: here no animals, are given away, unless you can eat them ;)</p>
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
    )
}
