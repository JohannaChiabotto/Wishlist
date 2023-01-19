import Container from "../../components/container/Container";
import HomeLoggedIn from "./HomeLoggedIn/HomeLoggedIn";
import HomeLoggedOut from "./HomeLoggedOut/HomeLoggedOut";

export default function HomePage() {
    return (
        <Container>
            <HomeLoggedIn/>
            <HomeLoggedOut/>
        </Container>
    )
}
