import React from "react";
import {WishStatus} from "../../model/WishStatus";
import style from './EditWishAsGuest.module.scss'
import Select from "../select/Select";

type EditWishProps = {
    name: string;
    status: WishStatus;

}
export default function EditWishAsGuest(props: EditWishProps) {

    function handleStatusChange(){

    }

    return (
        <div className={style.EditWishAsGuest}>
            <h3>{props.name}</h3>

            <Select status={props.status} changeStatusHandler={handleStatusChange}/>
        </div>
    )
}