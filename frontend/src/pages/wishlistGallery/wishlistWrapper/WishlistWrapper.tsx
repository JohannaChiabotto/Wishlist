import React, {useCallback} from "react";
import {Wish} from "../../../model/Wish";
import {NavLink} from "react-router-dom";
import Button from "../../../components/button/Button";
import style from './wishlistwrapper.module.scss';
import {WishStatus} from "../../../model/WishStatus";

type WishlistProps = {
    name: string,
    wishlistId: string,
    wishes: Array<Wish>,
    deleteWishlist: (id: string) => void
}
export default function WishlistWrapper(props: WishlistProps) {
    const id = props.wishlistId;
    const wishes = props.wishes;
    const freeWishes = wishes.filter(wish => wish.status === WishStatus.FREE);
    const reservedWishes = wishes.filter(wish => wish.status === WishStatus.RESERVE);
    const boughtWishes = wishes.filter(wish => wish.status === WishStatus.BOUGHT);

    const handleRemoveWishlistChange = useCallback(() => {
        props.deleteWishlist(id);
    }, [props, id]);

    return (
        <div className={style.Wrapper}>
            <h2 className={style.Title}>{props.name}</h2>
            <div className={style.TextWrapper}>
                <h3>{wishes.length} wishes</h3>
                <p> {freeWishes.length} free - {reservedWishes.length} reserved - {boughtWishes.length} bought </p>
            </div>
            <div className={style.ButtonWrapper}>
                <NavLink to={"/wishlist/" + props.wishlistId}>
                    <Button>edit</Button>
                </NavLink>
                <Button red={true} onCLickHandler={handleRemoveWishlistChange}>delete</Button>
            </div>
        </div>
    )

}
