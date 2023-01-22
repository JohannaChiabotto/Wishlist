import Card from "../../components/card/Card";
import React, {useState} from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import Container from "../../components/container/Container";

export default function LoginOrRegister() {
    const [isUserRegistered, setIsUserRegistered] = useState(true);


    function handleUserChange (isRegistered:boolean) {
        setIsUserRegistered(isRegistered);
    }


    return (
        <Container>
            <h1>Welcome to Wishlist</h1>
            <Card>
                <div>
                    {isUserRegistered ? <Login handleTypeOfUser={handleUserChange}/> : <Register handleTypeOfUser={handleUserChange} />}
                </div>
            </Card>
        </Container>
    );
}
