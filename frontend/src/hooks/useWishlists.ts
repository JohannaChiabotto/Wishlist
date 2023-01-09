import {useEffect, useState} from "react";
import {Wishlist} from "../model/Wishlist";
import axios from "axios";

export default function useWishlists() {
    const [wishlists, setWishlists] = useState<Wishlist[]>([])

    useEffect(()=> {
        getWishlists()
    }, [])

    function getWishlists(){
        axios.get("/create-wishlist")
            .then(response =>{
                setWishlists(response.data)
            })
            .catch(console.error)
    }
}