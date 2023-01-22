import {WishStatus} from "../../../model/WishStatus";
import React, {ChangeEvent, ChangeEventHandler} from "react";
import style from "./EditWishAsAdmin.module.scss";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import {ImBin} from "react-icons/im";
import Select from "../../../components/select/Select";

type EditWishProps = {
    name: string;
    status: WishStatus;
    wishId: string,
    id: string,
    handleWishesChange: ChangeEventHandler<HTMLInputElement>;
    handleWishRemoveChange: (arg1: string) => void;
    handleStatusChange: (event: ChangeEvent<HTMLSelectElement>) => void
}
export default function EditWishAsAdmin(props: EditWishProps) {

    function removeHandler() {
        props.handleWishRemoveChange(props.id);
    }

    return (
        <div className={style.EditWishAsAdmin}>
            <div className={style.InputWrapper}>
                <Input id={props.id} changeWishHandler={props.handleWishesChange} value={props.name}></Input>
                <Select status={props.status} id={props.id} changeStatusHandler={props.handleStatusChange}/>
            </div>
            <Button type="button" red={true} fixed={true} onCLickHandler={removeHandler}>
                <ImBin></ImBin>
            </Button>
        </div>
    )
}