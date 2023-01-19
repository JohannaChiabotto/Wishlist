import style from './Button.module.scss';
import React, {HTMLAttributes} from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    cssClasses?: string;
    onCLickHandler?: () => void;
    type?: 'submit' | 'reset' | 'button';
    fixed?: boolean;
    red?: boolean;
}


const Button = (props: ButtonProps) => {

    function handleClick() {
        if (props.onCLickHandler) {
            props.onCLickHandler();
        }
    }

    return (
        <button type={props.type}
                className={`${style.Button} ${props.red ? style.ButtonRed : ''} ${props.fixed ? style.ButtonFixed  : ''}`}
                onClick={handleClick}
        disabled={props.red}>

            {props.children}
        </button>
    );
}

export default Button;