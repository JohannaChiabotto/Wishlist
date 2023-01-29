import React, {useCallback, useContext, useState} from "react";
import {WishStatus} from "../../model/WishStatus";
import {Wishlist} from "../../model/Wishlist";
import EditWishAsAdmin from "./editWishAsAdmin/EditWishAsAdmin";
import {UserRole} from "../../model/UserRole";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import EditWishAsGuest from "./editWishAsGuest/EditWishAsGuest";
import style from "./EditWishlistPage.module.scss"
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Store} from "../../store/StoreContext";


export default function EditWishlistPage() {
    const [user] = useState<UserRole>(UserRole.ADMIN);
    const navigate = useNavigate();
    const params = useParams();
    const store = useContext(Store);
    const wishlistToEdit = store.wishlists.filter(wishlist => wishlist.wishlistId === params.id)

    const [wishlist, setWishlist] = useState<Wishlist>(wishlistToEdit[0]);


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
            const copyState = {...prevState};
            copyState.name = event.target.value;
            return {...copyState}
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

    const handleDeleteWishlistChange = useCallback(() => {
        axios.delete(`/api/wishlist/${params.id}`)
            .then(() => {
                    store.deleteWishlist(params.id!);
                    navigate('/wishlist-gallery');
                }
            )
            .catch(console.error)
    }, []);

    const handleSaveEditedWishlistChange = useCallback(() => {
        //  saving stuff to database, then redirect to wishlist gallery
        store.changeWishlist(params.id!, wishlist);

        navigate('/wishlist-gallery');

    }, [wishlist]);

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
            <h1>Wishlist "{wishlist.name}"</h1>
            <Card>
                {user === UserRole.ADMIN ? interfaceIfAdmin : interfaceIfGuest}

                <div className={style.ButtonWrapper}>
                    {user === UserRole.ADMIN ?
                        <Button red={true} onCLickHandler={handleDeleteWishlistChange}>delete Wishlist</Button> : null}
                    <Button onCLickHandler={handleSaveEditedWishlistChange}>save</Button>
                </div>
            </Card>
        </>
    )
}
