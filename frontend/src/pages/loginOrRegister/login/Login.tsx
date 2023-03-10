import React, {useCallback, useState} from "react";
import style from '../LoginOrRegister.module.scss';
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import {BsGithub} from "react-icons/bs";

type LoginProps = {
    handleTypeOfUser: (arg: boolean) => void
}

export default function Login(props: LoginProps) {
    const [login, setLogin] = useState({
        username: '',
        password: '',
    });

    const handleLoginChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        const id = event.currentTarget.id;

        if (id === 'username') {
            setLogin(prevState => {
                return {...prevState, username: value}
            });
        } else {
            setLogin(prevState => {
                return {...prevState, password: value}
            });
        }
    }, []);

    const handleSubmitLoginChange = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    }, []);

    const redirectToRegister = useCallback(() => {
        props.handleTypeOfUser(false);
    }, []);


    return (
        <><h2 className={style.Subtitle}>login</h2>
            <div className={style.Wrapper}>
                <div className={style.WrapperForm}>
                    <form onSubmit={handleSubmitLoginChange}>
                        <div className={style.InputWrapper}>
                            <Input id={'username'} label={'your username:'} value={login.username}
                                   changeWishHandler={handleLoginChange}></Input>
                        </div>
                        <div className={style.InputWrapper}>
                            <Input id={'password'} label={'your Password:'}
                                   value={login.password}
                                   changeWishHandler={handleLoginChange}></Input>
                        </div>
                        <div className={style.ButtonWrapper}>
                            <Button type="submit">login</Button>
                            <Button type="button" black={true}><BsGithub></BsGithub> login mit git</Button>
                        </div>
                    </form>
                </div>
                <div className={style.WrapperButton}>
                    <p>Don't you have an username and password?</p>
                    <Button type="button" onCLickHandler={redirectToRegister}>go to register</Button>
                </div>
            </div>
        </>
    );
}

