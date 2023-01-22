import {useEffect, useState} from "react";
import {Wishlist} from "../model/Wishlist";
import axios from "axios";

export default function useWishlist(){

    const [wishlists, setWishlists] = useState<Wishlist[]>([])

    useEffect( ()=> {
        getWishlists()
    }, [])

    function getWishlists(){
        axios.get("/api/wishlist")
            .then(response =>{
                setWishlists(response.data)
            })
            .catch(console.error)
    }

    function removeWishlist(id:string){
        axios.delete(`/api/wishlist/${id}`)
            .then(()=> {
                return setWishlists(null!
                );
            })
    }

    return{wishlists, removeWishlist}

}