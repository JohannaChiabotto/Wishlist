import Container from "../../components/container/Container";

import Card from "../../components/card/Card";
import style from "./Home.module.scss";
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";

export default function Home() {
    return (
        <Container>
            <h1>Welcome back, Username</h1>
            <Card>
                <p>Hallo liebe Freunde und Familie!
                wie schön, dass ihr eine Liste für uns erstellen wollt, um uns das schenken noch schöner machen zu können!</p>
                <p>Ich freue mich schon sehr auf die nächsten Geburtstage und Weihnachten, um diese tolle App  benutzen zu können!</p>
                <p>PS: hier werden keine Tiere, verschenkt, es sei denn, man kann sie essen ;)</p>
                <div className={style.ButtonWrapper}>
                    <Link to={"/create-wishlist"}>
                        <Button>Create your own wishlist</Button>
                    </Link>
                    <Link to={"/wishlist-gallery"}>
                        <Button>See all Wishlists</Button>
                    </Link>
                </div>
            </Card>
        </Container>
    )
}
