import style from './Container.module.scss';
interface ContainerProps {
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
    return (
        <div className={style.Container} >
            {props.children}
        </div>
    );
}
export default Container;