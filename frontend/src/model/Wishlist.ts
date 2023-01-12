/*interface NameIdInterface {
    id: string,
    name: string,
}

export interface Wishlist extends NameIdInterface {
    wishes: Array<Wish>
}
export interface Wish extends NameIdInterface {
    status: Status
}*/


import {Wish} from "./Wish";

export type Wishlist = {
    wishlistId?: string,
    name: string,
    wishes: Wish[]
}