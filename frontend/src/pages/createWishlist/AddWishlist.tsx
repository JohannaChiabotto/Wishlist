import {Wishlist} from "../../model/Wishlist";
import React, {useState} from "react";
import axios from "axios";
import Input from "../../components/Input";
import {Wish} from "../../model/Wish";
import {WishStatus} from "../../model/WishStatus";

export default function AddWishlist() {
    const emptyWishlist: Wishlist = { name: "", wishes: []}

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

    function handleRemoveWishFromListChange(name: string) {

        setWishes((prevState) => {
            const newState = [...prevState];
            const filteredState = newState.filter((wish) => wish.name !== name);
            return filteredState;
        });
    }

    function handleWishesChange(event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        const name = event.currentTarget.id;

        setWishes(
            wishes.map((wish) => (wish.name === name ? { ...wish, name: value } : wish))
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
        <div>
            <form onSubmit={handleSubmitChange}>
                <div>
                    <label htmlFor="name">Name of List:</label>
                    <input id="name" value={name} onChange={handleWishlistNameChange} />
                </div>

                {wishes.map((wish, index) => (
                    <Input
                        key={index}
                        name={wish.name}
                        value={wish.name}
                        changeWishHandler={handleWishesChange}
                        removeWishHandler={handleRemoveWishFromListChange}
                    />
                ))}

                <div>
                    <button type="button" onClick={handleAddWishToListChange}>
                        more wishes
                    </button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}