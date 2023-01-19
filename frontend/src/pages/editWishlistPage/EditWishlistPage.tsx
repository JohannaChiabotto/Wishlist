import React, {useState} from "react";
import {WishStatus} from "../../model/WishStatus";
import {Wishlist} from "../../model/Wishlist";
import EditWishAsAdmin from "../../components/editWishAsAdmin/EditWishAsAdmin";
import axios from "axios";
import {User} from "../../model/User";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import EditWishAsGuest from "../../components/editWishAsGuest/EditWishAsGuest";

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

    const interfaceIfAdmin = <>
        <Input id='name' label='Name of List:' changeWishHandler={handleWishlistNameChange}
               value={wishlist.name}></Input>
        <ul>
            {wishlist.wishes.map(wish => <EditWishAsAdmin isUserAdmin={true} wishId={wish.wishId!} status={wish.status}
                                                          key={wish.wishId}
                                                          name={wish.name}/>)}
        </ul>
    </>;

    const interfaceIfGuest = <>
        <h2>{wishlist.name}</h2>
        <ul>
            {wishlist.wishes.map(wish => <EditWishAsGuest
                status={wish.status}
                name={wish.name}/>)}
        </ul>
    </>;

    return (<div>
            <h1>Wihlist edit page</h1>
            <Card>
                {user === User.ADMIN ? interfaceIfAdmin : interfaceIfGuest}
                {user === User.ADMIN ?? <button>delete Wishlist</button>}
                <Button onCLickHandler={handleSaveEditedWishlistChange}>save</Button>
            </Card>

            <Button onCLickHandler={() => setUser(User.ADMIN)}>as admin</Button>
            <Button onCLickHandler={() => setUser(User.GUEST)}>as guest</Button>
        </div>
    )

}