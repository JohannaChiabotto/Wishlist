import {Status, Wish, Wishlist} from "../../model/Wishlist";
import {ChangeEvent, useState} from "react";
import axios from "axios";

export default function AddWishlist() {
    const [name, setName] = useState<string>("")
    const [wishlist, setWishlist] = useState<Wishlist>()
    const [wishes, setWishes] = useState<Array<Wish>>([])

    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    };

    function onWishesChange(event: ChangeEvent<HTMLInputElement>) {
        setWishes((prevState)=> {
            const newState = [...prevState];
            newState.push( {id:'123', name:event.target.value, status: Status.FREE});
            return newState;
           })
    };

    function onSaveClick() {
setWishlist( {id:'123', name:name, wishes:wishes})
        /*
        axios.post("/create-wishlist", {
            id: Math.random().toString(),
            name: name,
            wishes: wishes
        })
            .then(response => response.data)
            .then((savedWishlist) => setWishlists(prevState => [prevState, savedWishlist]))
            .catch(() => console.error())

         */
    }

    return (
        <div>
            <div>
                <label htmlFor="nameOfList">name of list:</label>
                <input id={"nameOfList"} onChange={onNameChange}/>
            </div>
            <div>
                <label htmlFor="wishes">wish:</label>
                <input id={"wishes"} onChange={onWishesChange}/>
                </div>
            <div>
                <button onClick={onSaveClick}>Save</button>
            </div>
        </div>
    )
    }