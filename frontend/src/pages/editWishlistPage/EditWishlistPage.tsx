import React, {useState} from "react";
import {WishStatus} from "../../model/WishStatus";
import {Wishlist} from "../../model/Wishlist";
import EditWishAsAdmin from "./editWishAsAdmin/EditWishAsAdmin";
import {User} from "../../model/User";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import EditWishAsGuest from "./editWishAsGuest/EditWishAsGuest";

export default function EditWishlistPage() {
    const [user, setUser] = useState<User>(User.ADMIN);

    const [wishlist, setWishlist] = useState<Wishlist>({
        wishlistId: 'id123', name: 'Samuel Geburtstag', wishes: [
            {name: 'Pi', status: WishStatus.FREE, wishId: '123'},
            {name: 'Pa', status: WishStatus.BOUGHT, wishId: '1234'},
            {name: 'Po', status: WishStatus.RESERVE, wishId: '456'},
            {name: 'Bubu', status: WishStatus.FREE, wishId: '768'}
        ]
    });

    function handleWishStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const id = event.target.id.replace('select-', '');
        setWishlist(prevState => {
            const newState = {...prevState};
            newState.wishes[+id].status = event.target.value as WishStatus;
            return newState;
        })
    }

    function handleRemoveWishFromListChange(id: string) {
        setWishlist((prevState) => {
            const copyOfWishes = [...prevState.wishes]
            const filteredWishes = copyOfWishes.filter((wish, index) => index !== +id);
            const newState = {...prevState, wishes: filteredWishes};
            return newState;
        });
    }

    function handleWishlistNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setWishlist(prevState => {
            return {...prevState, name: event.target.value}
        });
    }

    function handleWishesNameChange(event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        const id = event.currentTarget.id;
        console.log(value, id)

        setWishlist(prevState => {
                const copyState = {...prevState};
                const copyWishes = [...copyState.wishes]
                copyWishes.map((wish, index) => (index === +id ? {...wish, name: value} : wish))
                const newState = {...prevState, wishes: copyWishes};
                return newState;
            }
        );
    }

    function handleSaveEditedWishlistChange() {

    }

    const interfaceIfAdmin = <>
        <Input id='name' label='Name of List:' changeWishHandler={handleWishlistNameChange}
               value={wishlist.name}></Input>
        <ul>
            {wishlist.wishes.map((wish, index) => <EditWishAsAdmin
                    isUserAdmin={true}
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

    return (<div>
            <h1>Wihlist edit page</h1>
            <Card>
                {user === User.ADMIN ? interfaceIfAdmin : interfaceIfGuest}
                {user === User.ADMIN ? <Button red={true}>delete Wishlist</Button> : null}
                <Button onCLickHandler={handleSaveEditedWishlistChange}>save</Button>
            </Card>

            <p>{JSON.stringify(wishlist)}</p>

            <Button onCLickHandler={() => setUser(User.ADMIN)}>as admin</Button>
            <Button onCLickHandler={() => setUser(User.GUEST)}>as guest</Button>
        </div>
    )
}
