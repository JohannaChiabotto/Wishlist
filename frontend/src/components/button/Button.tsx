import style from './Button.module.scss';
import {HTMLAttributes} from "react";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    text: string;
    cssClasses?: string;
    onCLickHandler?: () => void;
    type?: 'submit' | 'reset' | 'button';
}



const Button = (props: ButtonProps) => {

    function handleClick() {
        if(props.onCLickHandler){
            props.onCLickHandler();
        }
    }

    return (
        <button type={props.type} className={style.Button} onClick={handleClick}>
            {props.text}
        </button>
    );
}

export default Button;