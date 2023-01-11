import {Status, Wish, Wishlist} from "../../model/Wishlist";
import React, {ChangeEvent, useState} from "react";
import axios from "axios";
import uuid from "react-uuid";
import Input from "../../components/Input";

export default function AddWishlist() {
    const [name, setName] = useState('');
    const [wishes, setWishes] = useState([
        { id: uuid(), name: '', status: 'FREE' },
    ]);
    const [wishlist, setWishlist] = useState({ name: name, wishes: wishes });

    function changeNameHandler(event: React.FormEvent<HTMLInputElement>) {
        setName(event.currentTarget.value);
    }

    function moreWishesHandler() {
        setWishes((prevState) => {
            const newState = [...prevState];
            newState.push({ id: uuid(), name: '', status: 'FREE' });
            return newState;
        });
    }

    function removeWishHandler(id: string) {

        setWishes((prevState) => {
            const newState = [...prevState];
            const filteredState = newState.filter((wish) => wish.id !== id);
            return filteredState;
        });
    }

    function changeWishHandler(event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        const id = event.currentTarget.id;

        setWishes(
            wishes.map((wish) => (wish.id === id ? { ...wish, name: value } : wish))
        );
    }

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        /*type WishlistType ={
            name : string,
            wishes : Wish[]
        }

        const newWishlist : WishlistType = {name:name, wishes:wishes}*/

        axios.post("/wishlist/create", { name: name, wishes: wishes })

            .then(response => response.data)
            .then(() => {
                setName('');
                setWishes([{ id: uuid(), name: '', status: '' }]);
            })
            .catch(console.error)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Name of List:</label>
                    <input id="name" value={name} onChange={changeNameHandler} />
                </div>

                {wishes.map((wish) => (
                    <Input
                        key={wish.id}
                        id={wish.id}
                        value={wish.name}
                        changeWishHandler={changeWishHandler}
                        removeWishHandler={removeWishHandler}
                    />
                ))}

                <div>
                    <button type="button" onClick={moreWishesHandler}>
                        more wishes
                    </button>
                    <button type="submit">Save</button>
                </div>
            </form>
            <p>{JSON.stringify(wishlist)}</p>
        </div>
    );
}