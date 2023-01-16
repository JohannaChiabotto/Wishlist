import style from './Button.module.scss';
interface ButtonProps {
    text: string;
    cssClasses?: string;
    onCLickHandler?: () => void;
}



const Button = (props: ButtonProps) => {

    function handleClick() {
        // props.onCLickHandler();
    }

    return (
        <button className={style.Button} type="button" onClick={handleClick}>
            {props.text}
        </button>
    );
}

export default Button;