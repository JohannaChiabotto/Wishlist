import Card from "../../../components/card/Card";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import React, {useState} from "react";
import style from './HomeLoggedOut.module.scss';

export default function HomeLoggedOut() {
    const [isUserRegistered, setIsUserRegistered] = useState(true);
    const [login, setLogin] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: '',
        samePpassword: '',
    });

    const loginComponent = <div><h2 className={style.Subtitle}>login</h2>

        <form onSubmit={handleSubmitLoginChange}>
            <div className={style.InputWrapper}>
                <Input id={'username'} label={'your username:'} value={login.username}
                       changeWishHandler={handleWishlistNameChange}></Input>
            </div>
            <div className={style.InputWrapper}>
                <Input id={'password'}  label={'your Password:'} value={register.password}
                       changeWishHandler={handleWishlistNameChange}></Input>
            </div>
            <div className={style.ButtonWrapper}>
                <Button type="button" onCLickHandler={() => setIsUserRegistered(false)}>Register</Button>
                <Button type="submit">Save</Button>
            </div>
        </form>
    </div>;

    const registerComponent = <div><h2 className={style.Subtitle}>Register</h2>

        <form onSubmit={handleSubmitLoginChange}>
            <div className={style.InputWrapper}>
                <Input id={'username'} label={'your username:'} value={register.username}
                       changeWishHandler={handleWishlistNameChange}></Input>
            </div>
            <div className={style.InputWrapper}>
                <Input id={'password'} label={'your Email:'} value={register.email}
                       changeWishHandler={handleWishlistNameChange}></Input>
            </div>
            <div className={style.InputWrapper}>
                <Input id={'password'} label={'your password:'} value={register.password}
                       changeWishHandler={handleWishlistNameChange}></Input>
            </div>
            <div className={style.InputWrapper}>
                <Input id={'password'} label={'Repeat your password:'} value={register.samePpassword}
                       changeWishHandler={handleWishlistNameChange}></Input>
            </div>
            <div className={style.ButtonWrapper}>
                <Button type="button" onCLickHandler={() => setIsUserRegistered(true)}>Login</Button>
                <Button type="submit">Save</Button>
            </div>
        </form>
    </div>;

    function handleWishlistNameChange(event: React.FormEvent<HTMLInputElement>) {
        // setuserName(event.currentTarget.value);
    }

    function handleSubmitLoginChange(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        /*
       axios.post("/api/...", wishlistRequest)
            .then()
            .catch(console.error)
            */
    }

    return (
        <>
            <h1>Welcome to Wishlist</h1>
            <Card>
                <div>
                {isUserRegistered ? loginComponent : registerComponent}
                </div>
            </Card>
        </>
    );
}
