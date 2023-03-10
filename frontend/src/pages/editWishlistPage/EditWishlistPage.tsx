import React, {useCallback, useEffect, useState} from "react";
import {WishStatus} from "../../model/WishStatus";
import {Wishlist} from "../../model/Wishlist";
import EditWishAsAdmin from "./editWishAsAdmin/EditWishAsAdmin";
import {User} from "../../model/User";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import EditWishAsGuest from "./editWishAsGuest/EditWishAsGuest";
import style from "./EditWishlistPage.module.scss"
import {useNavigate} from "react-router-dom";
import axios from "axios";

const emptyWishlist = {name: "", wishes: []}

export default function EditWishlistPage() {
    const [user, setUser] = useState<User>(User.ADMIN);
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState<Wishlist>(emptyWishlist);



    useEffect(()=>{
        axios.get("/api/wishlist/{id}")
        .then(response => {
            setWishlist(response.data)
        })
            .catch(console.error)
    }, []);

    const handleWishStatusChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const id = event.target.id.replace('select-', '');
        setWishlist(prevState => {
            const newState = {...prevState};
            newState.wishes[+id].status = event.target.value as WishStatus;
            return newState;
        })
    }, []);

    const handleRemoveWishFromListChange = useCallback((id: string) => {
        setWishlist((prevState) => {
            const copyOfWishes = [...prevState.wishes]
            const filteredWishes = copyOfWishes.filter((wish, index) => index !== +id);
            return {...prevState, wishes: filteredWishes};
        });
    }, []);

    const handleWishlistNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setWishlist(prevState => {
            return {...prevState, name: event.target.value}
        });
    }, []);

    const handleWishesNameChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        event.stopPropagation();
        const value = event.currentTarget.value;
        const id: number = +event.currentTarget.id;

        setWishlist(prevState => {
                const copyState = {...prevState};
                const copyWishes = [...copyState.wishes];
                copyWishes[id].name = value;
                return {...prevState, wishes: copyWishes};
            }
        );
    }, [])

    const handleSaveEditedWishlistChange = useCallback(() => {
        //  saving stuff to database, then redirect to wishlist gallery

        navigate('/wishlist-gallery');


    }, []);

    const setAsAdmin = useCallback(() => {
         setUser(User.ADMIN) ;
    }, []);

    const setAsGuest = useCallback(() => {
         setUser(User.GUEST) ;
    }, []);

    const interfaceIfAdmin = <>
        <Input id='name' label='Name of List:' changeWishHandler={handleWishlistNameChange}
               value={wishlist.name}></Input>
        <ul>
            {wishlist.wishes.map((wish, index) => <EditWishAsAdmin
                    wishId={wish.wishId!}
                    status={wish.status}
                    key={wish.wishId}
                    name={wish.name}
                    id={index.toString()}
                    handleWishesChange={handleWishesNameChange}
                    handleWishRemoveChange={handleRemoveWishFromListChange}
                    handleStatusChange={handleWishStatusChange}
                />
            )}
        </ul>
    </>;

    const interfaceIfGuest = <>
        <h2>{wishlist.name}</h2>
        <ul>
            {wishlist.wishes.map((wish, index) =>
                <EditWishAsGuest
                    key={wish.wishId}
                    status={wish.status}
                    name={wish.name}
                    id={index.toString()}
                    handleStatusChange={handleWishStatusChange}
                />
            )}
        </ul>
    </>;

    return (<>
            <div className={style.ButtonWrapper}>
                <Button onCLickHandler={setAsAdmin}>views as admin</Button>
                <Button onCLickHandler={setAsGuest}>views as guest</Button>
            </div>

            <h1>Wihlist edit page</h1>
            <Card>
                {user === User.ADMIN ? interfaceIfAdmin : interfaceIfGuest}

                <div className={style.ButtonWrapper}>
                    {user === User.ADMIN ? <Button red={true}>delete Wishlist</Button> : null}
                    <Button onCLickHandler={handleSaveEditedWishlistChange}>save</Button>
                </div>
            </Card>
        </>
    )
}
