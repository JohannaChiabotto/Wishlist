import {ChangeEventHandler} from "react";

interface InputProps {
    name: string;
    value: string;
    changeWishHandler: ChangeEventHandler<HTMLInputElement>;
    removeWishHandler: (arg1: string) => void;
}

const Input = (props: InputProps) => {
    const name = props.name;

    function removeHandler() {
        props.removeWishHandler(name);
    }

    return (
        <div>
            <input
                value={props.value}
                id={props.name}
                onChange={props.changeWishHandler}
            />

            <button type="button" onClick={removeHandler}>
                delete
            </button>
        </div>
    );
};

export default Input;