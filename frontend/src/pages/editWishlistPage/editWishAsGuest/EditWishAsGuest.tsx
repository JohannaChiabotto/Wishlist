import React, {ChangeEvent} from "react";
import {WishStatus} from "../../../model/WishStatus";
import style from './EditWishAsGuest.module.scss'
import Select from "../../../components/select/Select";

type EditWishProps = {
    name: string;
    status: WishStatus;
    id:string;
    handleStatusChange: (event: ChangeEvent<HTMLSelectElement>) => void
}
export default function EditWishAsGuest(props: EditWishProps) {

    return (
        <div className={style.EditWishAsGuest}>
            <h3>{props.name}</h3>
            <Select status={props.status} id={props.id} changeStatusHandler={props.handleStatusChange}/>
        </div>
    )
}
