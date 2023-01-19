import {ChangeEventHandler} from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import {ImBin} from "react-icons/im";
import style from './MoreWishesInput.module.scss';

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
        <div className={style.MoreWishList}>
            <div className={style.InputWrapper}>
            <Input id={props.id}  changeWishHandler={props.handleWishesChange} value={props.value}></Input>
            </div>
            <Button type="button"  onCLickHandler={removeHandler}>
                <ImBin></ImBin>
            </Button>
        </div>
    );
};

/*

 */

export default MoreWishesInput;