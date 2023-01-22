import React, {ChangeEventHandler} from "react";
import {WishStatus} from "../../model/WishStatus";
import style from './Select.module.scss'

interface SelectProps {
    status: WishStatus,
    id: string,
    changeStatusHandler: ChangeEventHandler<HTMLSelectElement>;
}

const Select = (props: SelectProps) => {

    return (
        <>
            <select value={props.status} onChange={props.changeStatusHandler} name="status" id={`select-${props.id}
            `} className={style.Select}>
                <option value="FREE">free</option>
                <option value="BOUGHT">bought</option>
                <option value="RESERVE">reserved</option>
            </select>
        </>
    )
};

export default Select;
