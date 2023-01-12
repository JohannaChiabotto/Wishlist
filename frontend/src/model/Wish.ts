import {WishStatus} from "./WishStatus";

export type Wish = {
    wishId?: string,
    name: string,
    // status: "RESERVE"|"BOUGHT"|"FREE"
    status: WishStatus
}