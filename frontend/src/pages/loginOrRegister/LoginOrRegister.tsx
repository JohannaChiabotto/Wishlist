import Card from "../../components/card/Card";
import React, {useCallback, useState} from "react";
import Login from "./login/Login";
import Register from "./register/Register";

export default function LoginOrRegister() {
    const [isUserRegistered, setIsUserRegistered] = useState(true);

    const handleUserChange = useCallback((isRegistered: boolean) => {
        setIsUserRegistered(isRegistered);
    }, []);

    return (
        <>
            <h1>Welcome to Wishlist</h1>
            <Card>
                <div>
                    {isUserRegistered ? <Login handleTypeOfUser={handleUserChange}/> :
                        <Register handleTypeOfUser={handleUserChange}/>}
                </div>
            </Card>
        </>
    );
}
