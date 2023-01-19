import React, {ChangeEventHandler, HTMLAttributes} from "react";
import {WishStatus} from "../../model/WishStatus";
import style from './Select.module.scss'

interface SelectProps extends HTMLAttributes<HTMLInputElement> {
    status: WishStatus,
    changeStatusHandler: ChangeEventHandler<HTMLInputElement>;
}

const Select = (props: SelectProps) => {

    return (
        <select name="status"  className={style.Select}>
            <option selected={props.status === WishStatus.FREE}
                    value="FREE"> free
            </option>
            <option
                selected={props.status === WishStatus.BOUGHT}
                value="BOUGHT"> bought
            </option>
            <option
                selected={props.status === WishStatus.RESERVE}
                value="RESERVE"> reserved
            </option>
        </select>

    )
};

export default Select;