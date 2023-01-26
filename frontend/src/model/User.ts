import {Wishlist} from "./Wishlist";

export type User ={
    id: string,
    username: string,
    password: string,
    email: string
    wishlist: Wishlist[]
}