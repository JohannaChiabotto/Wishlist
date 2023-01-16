import {WishStatus} from "../../model/WishStatus";
import Input from "../Input";
import React from "react";

type EditWishProps = {
    name: string;
    status: WishStatus;
    isUserAdmin:boolean;
    wishId:string
}
export default function EditWish(props: EditWishProps){

    function handleRemoveWishFromListChange(name: string) {

    }

    function handleWishesChange(event: React.FormEvent<HTMLInputElement>) {

    }

    return(
        <div>
            { props.isUserAdmin?
                <Input
                    key={props.wishId}
                    name={props.name}
                    value={props.name}
                    changeWishHandler={handleWishesChange}
                    removeWishHandler={handleRemoveWishFromListChange}
                /> :
           <p>{props.name}</p>
            }

            <select name="cars" id="cars">
                <option selected={props.status === 'FREE'} value="FREE">free</option>
                <option  selected={props.status === 'BOUGHT'} value="BOUGHT">bought</option>
                <option  selected={props.status === 'RESERVE'} value="RESERVE">reserved</option>
            </select>
        </div>
    )
}