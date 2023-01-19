import style from './Button.module.scss';
import React, {HTMLAttributes} from "react";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
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
            {props.children}
        </button>
    );
}

export default Button;