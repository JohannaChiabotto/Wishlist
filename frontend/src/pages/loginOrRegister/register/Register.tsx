import React, {useCallback, useState} from "react";
import style from '../LoginOrRegister.module.scss';
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import axios from "axios";
import {useNavigate} from "react-router-dom";

type RegisterProps = {
    handleTypeOfUser: (arg: boolean) => void
}

export default function Register(props: RegisterProps) {
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: '',
        samePassword: '',
    });
    const navigate = useNavigate();


    const handleRegisterChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {

        const value = event.currentTarget.value;
        const id = event.currentTarget.id;

        switch (id) {
            case 'username':
                setNewUser(prevState => {
                        return {...prevState, username: value}
                    }
                );
                break;
            case 'email':
                setNewUser(prevState => {
                    return {...prevState, email: value};
                });
                break;

            case 'password':
                setNewUser(prevState => {
                    return {...prevState, password: value}
                });
                break;
            case 'samePassword':
                setNewUser(prevState => {
                    return {...prevState, samePassword: value}
                });
                break;
        }

    }, [newUser]);

    const handleSubmitLoginChange = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        axios.post("/api/users/register", {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        }).then((data) => {
            navigate('/')
        }).catch(e => console.error(e))


    }, [newUser])

    const redirectToLogin = useCallback(() => {
        props.handleTypeOfUser(true);
    }, []);

    return (
        <>
            <h2 className={style.Subtitle}>Register</h2>

            <div className={style.Wrapper}>
                <div className={style.WrapperForm}>
                    <form onSubmit={handleSubmitLoginChange}>
                        <div className={style.InputWrapper}>
                            <Input id={'username'} label={'your username:'} value={newUser.username}
                                   changeWishHandler={handleRegisterChange}></Input>
                        </div>
                        <div className={style.InputWrapper}>
                            <Input id={'email'} label={'your Email:'} value={newUser.email}
                                   changeWishHandler={handleRegisterChange}></Input>
                        </div>
                        <div className={style.InputWrapper}>
                            <Input id={'password'} label={'your password:'} value={newUser.password}
                                   changeWishHandler={handleRegisterChange}></Input>
                        </div>
                        <div className={style.InputWrapper}>
                            <Input id={'samePassword'} label={'Repeat your password:'} value={newUser.samePassword}
                                   changeWishHandler={handleRegisterChange}></Input>
                        </div>
                        <div className={style.ButtonWrapper}>

                            <Button type="submit">save</Button>
                        </div>
                    </form>
                </div>
                <div className={style.WrapperButton}>
                    <p>Do you already have an username and password?</p>
                    <Button type="button" onCLickHandler={redirectToLogin}>go to login</Button></div>
            </div>
        </>
    );
}

