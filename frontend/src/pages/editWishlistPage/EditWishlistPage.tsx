import React, {useState} from "react";
import {WishStatus} from "../../model/WishStatus";
import {Wishlist} from "../../model/Wishlist";
import EditWish from "../../components/editWish/EditWish";
import axios from "axios";
import {User} from "../../model/User";

export default function EditWishlistPage() {
    const [user, setUser] = useState<User>(User.ADMIN);

    const [wishlist, setWishlist] = useState<Wishlist>({
        wishlistId: 'id123', name: 'Samuel Geburtstag', wishes: [
            {name: 'Pi', status: WishStatus.FREE, wishId: '123'},
            {name: 'Pa', status: WishStatus.FREE, wishId: '1234'},
            {name: 'Po', status: WishStatus.FREE, wishId: '456'},
            {name: 'Bubu', status: WishStatus.FREE, wishId: '768'}
        ]
    });

    function handleWishlistNameChange(event: React.ChangeEvent<HTMLInputElement>) {

        setWishlist(prevState => {
            return {...prevState, name: event.target.value}
        });
    }

    function handleSaveEditedWishlistChange() {
        axios.post("/api/wishlist", wishlist)

            .then(response => response.data)
            .then(() => {

            })
            .catch(console.error)

    }

    const interfaceIfAdmin = <div>
        <div>
            <label htmlFor="name">Name of List:</label>
            <input id="name" value={wishlist.name} onChange={handleWishlistNameChange}/>
        </div>
        <ul>
            {wishlist.wishes.map(wish => <EditWish isUserAdmin={true} wishId={wish.wishId!} status={wish.status}
                                                   key={wish.wishId}
                                                   name={wish.name}/>)}
        </ul>
    </div>;

    const interfaceIfGuest = <div>
        <div>
            <p>{wishlist.name}</p>
        </div>
        <ul>
            {wishlist.wishes.map(wish => <EditWish isUserAdmin={false}
                                                   wishId={wish.wishId!}
                                                   status={wish.status}
                                                   key={wish.wishId}
                                                   name={wish.name}/>)}
        </ul>
    </div>;

    return (<div>
            <p>Wihlist edit page</p>
            {user === User.ADMIN ? interfaceIfAdmin : interfaceIfGuest}
            {user === User.ADMIN ?? <button>delete Wishlist</button> }
            <button onClick={handleSaveEditedWishlistChange}>save</button>
        </div>
    )

}