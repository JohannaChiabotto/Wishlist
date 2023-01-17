import {ChangeEventHandler} from "react";
import Input from "../input/Input";
import Button from "../button/Button";


interface MoreWishesInputProps {
    id: string;
    value: string;
    handleWishesChange: ChangeEventHandler<HTMLInputElement>;
    handleWishRemoveChange: (arg1: string) => void;
}

const MoreWishesInput = (props: MoreWishesInputProps) => {


    function removeHandler() {
        props.handleWishRemoveChange(props.id);
    }


    return (
        <div>

            <Input id={props.id} changeWishHandler={props.handleWishesChange} value={props.value}></Input>

            <Button text={'delete'} type="button" onCLickHandler={removeHandler}>

            </Button>
        </div>
    );
};

/*

 */

export default MoreWishesInput;