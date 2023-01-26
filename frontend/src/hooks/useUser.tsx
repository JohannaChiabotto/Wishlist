import {useEffect, useState} from "react";
import axios from "axios";
import {Wishlist} from "../model/Wishlist";
import {User} from "../model/User";

export default function useUser(){

    const emptyWishlist: Wishlist={
        "wishlistId": "",
        "name": "",
        "wishes": []
    }

    const emptyUser: User={
        "id":"",
        "username":"",
        "password": "",
        "email": "",
        "wishlist": [emptyWishlist]
    }

    const [userName, setUserName] = useState<User>(emptyUser)

    useEffect(()=>{
        axios.get("/api/users/me")
            .then(result => result.data)
            .then(setUserName)
    },[])

    return {username: userName}
}