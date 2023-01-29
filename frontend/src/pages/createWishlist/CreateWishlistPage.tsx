import React, {useCallback, useContext, useState} from "react";
import {Wish} from "../../model/Wish";
import {WishStatus} from "../../model/WishStatus";
import {Wishlist} from "../../model/Wishlist";
import axios from "axios";
import Card from "../../components/card/Card";
import Input from "../../components/input/Input";
import MoreWishesInput from "./moreWishesInput/MoreWishesInput";
import style from "./CreateWishlistPage.module.scss";
import Button from "../../components/button/Button";
import {Store} from "../../store/StoreContext";

export default function CreateWishlistPage() {
    const [name, setName] = useState('');
    const [wishes, setWishes] = useState<Wish[]>([
        {name: '', status: WishStatus.FREE},
    ]);
    const store = useContext(Store);

    const handleWishlistNameChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }, []);

    const handleAddWishToListChange = useCallback(() => {
        setWishes((prevState) => {
            const newState = [...prevState];
            newState.push({name: '', status: WishStatus.FREE});
            return newState;
        });
    }, []);

    const handleRemoveWishFromListChange = useCallback((id: string) => {
        setWishes((prevState) => {
            const newState = [...prevState];
            return newState.filter((wish, index) => index !== +id);
        });
    }, []);

    const handleWishesChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        const id = event.currentTarget.id;
        setWishes(prevState => {
                const newWishes = [...prevState];
                return newWishes.map((wish, index) => (index === +id ? {...wish, name: value} : wish))
            }
        );
    }, []);

    function handleSubmitChange(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const wishlistRequest: Wishlist = {"name": name, "wishes": wishes}

        axios.post("/api/wishlist", wishlistRequest)
            .then(response => {
                store.setWishlist(response.data);
                setName("")
                setWishes([])
            })
            .catch(console.error)
    }

    return (
        <>

            <h1>Create your whislist:</h1>

            <Card>
                <form onSubmit={handleSubmitChange}>

                    <Input id={'name'} label={'Name of List component:'} value={name}
                           changeWishHandler={handleWishlistNameChange}></Input>


                    {wishes.map((wish, index) => (

                            <MoreWishesInput
                                key={`wish-${index}`}
                                id={index.toString()}
                                value={wish.name}
                                handleWishesChange={handleWishesChange}
                                handleWishRemoveChange={handleRemoveWishFromListChange}
                            />

                    ))}

                    <div className={style.ButtonWrapper}>
                        <Button type="button" onCLickHandler={handleAddWishToListChange}>more wishes</Button>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </Card>
        </>
    );
}
