import React, {ChangeEventHandler, HTMLAttributes} from "react";
import style from "./Input.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    id: string;
    value: string;
    changeWishHandler: ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: InputProps) => {

    return (<>

        { props.label ?  <label className={style.Label} htmlFor={props.id}>{props.label}</label>: null}
            <input
                value={props.value}
                id={props.id}
                className={style.Input}
                onChange={props.changeWishHandler}
            />
        </>
    );
};

export default Input;