import React, {useCallback, useState} from "react";
import style from '../LoginOrRegister.module.scss';
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";

type RegisterProps = {
    handleTypeOfUser: (arg: boolean) => void
}

export default function Register(props: RegisterProps) {
    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: '',
        samePassword: '',
    });

    const handleRegisterChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        const id = event.currentTarget.id;

        switch (id) {
            case 'username':
                setRegister(prevState => {
                    return {...prevState, username: value}
                });
                break;
            case 'email':
                setRegister(prevState => {
                    return {...prevState, email: value}
                });
                break;

            case 'password':
                setRegister(prevState => {
                    return {...prevState, password: value}
                });
                break;
            case 'samePassword':
                setRegister(prevState => {
                    return {...prevState, samePassword: value}
                });
                break;
        }

    }, []);

    const handleSubmitLoginChange = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }, [])

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
                            <Input id={'username'} label={'your username:'} value={register.username}
                                   changeWishHandler={handleRegisterChange}></Input>
                        </div>
                        <div className={style.InputWrapper}>
                            <Input id={'email'} label={'your Email:'} value={register.email}
                                   changeWishHandler={handleRegisterChange}></Input>
                        </div>
                        <div className={style.InputWrapper}>
                            <Input id={'password'} label={'your password:'} value={register.password}
                                   changeWishHandler={handleRegisterChange}></Input>
                        </div>
                        <div className={style.InputWrapper}>
                            <Input id={'samePassword'} label={'Repeat your password:'} value={register.samePassword}
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

