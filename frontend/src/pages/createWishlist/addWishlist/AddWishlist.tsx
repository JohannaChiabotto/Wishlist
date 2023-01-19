import {Wishlist} from "../../../model/Wishlist";
import React, {useState} from "react";
import axios from "axios";
import Input from "../../../components/input/Input";
import {Wish} from "../../../model/Wish";
import {WishStatus} from "../../../model/WishStatus";
import Button from "../../../components/button/Button";
import MoreWishesInput from "../../../components/moreWishesInput/MoreWishesInput";
import Card from "../../../components/card/Card";

export default function AddWishlist() {

    const [name, setName] = useState('');
    const [wishes, setWishes] = useState <Wish[]>([
        { name: '', status: WishStatus.FREE },
    ]);

    function handleWishlistNameChange(event: React.FormEvent<HTMLInputElement>) {
        setName(event.currentTarget.value);
    }

    function handleAddWishToListChange() {
        setWishes((prevState) => {
            const newState = [...prevState];
            newState.push({ name: '', status: WishStatus.FREE });
            return newState;
        });
    }

    function handleRemoveWishFromListChange(id: string) {

        setWishes((prevState) => {
            const newState = [...prevState];
            const filteredState = newState.filter((wish,index) => index !== +id);
            return filteredState;
        });
    }

    function handleWishesChange(event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        const id = event.currentTarget.id;

        setWishes(
            wishes.map((wish, index) => (index === +id ? { ...wish, name: value } : wish))
        );
    }

    function handleSubmitChange(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const wishlistRequest: Wishlist = { "name": name, "wishes": wishes}

        axios.post("/api/wishlist", wishlistRequest)

            .then(response => response.data)
            .then(() => {
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

                <Input id={'name'} label={'Name of List component:'} value={name} changeWishHandler={handleWishlistNameChange}></Input>

                {wishes.map((wish, index) => (
                    <MoreWishesInput
                        key={index}
                        id={index.toString()}
                        value={wish.name}
                        handleWishesChange={handleWishesChange}
                        handleWishRemoveChange={handleRemoveWishFromListChange}
                    />
                ))}

                <div>
                    <Button type="button"  onCLickHandler={handleAddWishToListChange}>more wishes</Button>
                    <Button type="submit" >Save</Button>
                </div>
            </form>
            </Card>
        </>
    );
}