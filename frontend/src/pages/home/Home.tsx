import {Link} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <p>Description</p>
            <Link to={"/create-wishlist"}>
                <button> Create your own wishlist</button>
            </Link>

        </div>
    )
}