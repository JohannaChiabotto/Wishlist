import {Wishlist} from "./Wishlist";

export type User ={
    id: string,
    username: string,
    password: string,
    wishlist: Wishlist[]
}