import style from './Button.module.scss';
import React, {HTMLAttributes} from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    cssClasses?: string;
    onCLickHandler?: () => void;
    type?: 'submit' | 'reset' | 'button';
    fixed?: boolean;
    red?: boolean;
    darkRed?: boolean;
    black?: boolean;

}


const Button = (props: ButtonProps) => {

    function handleClick() {
        if (props.onCLickHandler) {
            props.onCLickHandler();
        }
    }

    return (
        <button type={props.type}
                className={`${props.cssClasses} ${style.Button} 
                ${props.red ? style.ButtonRed : ''}
                ${props.darkRed ? style.ButtonDarkRed : ''}
                 ${props.black ? style.ButtonBlack : ''}
                 ${props.fixed ? style.ButtonFixed  : ''}`}
                onClick={handleClick}>
            {props.children}
        </button>
    );
}

export default Button;