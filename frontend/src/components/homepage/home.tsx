import {Link} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <p>Description</p>
            <img src={background} alt={"background"}/>
            <Link to={"/create-wishlist"}>
                <button> Create your own wishlist</button>
            </Link>

        </div>
    )
}