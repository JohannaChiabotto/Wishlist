import {ChangeEventHandler} from "react";

interface InputProps {
    id: string;
    value: string;
    changeWishHandler: ChangeEventHandler<HTMLInputElement>;
    removeWishHandler: (arg1: string) => void;
}

const Input = (props: InputProps) => {
    const id = props.id;

    function removeHandler() {
        console.log('id of input is ', id);
        props.removeWishHandler(id);
    }

    return (
        <div>
            <input
                value={props.value}
                id={props.id}
                onChange={props.changeWishHandler}
            />

            <button type="button" onClick={removeHandler}>
                delete
            </button>
        </div>
    );
};

export default Input;