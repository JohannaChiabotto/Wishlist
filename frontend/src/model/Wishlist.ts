export type Wishlist = {
    wishlistId: string,
    name: string,
    wishes: Wish
}

export type Wish = {
    name: string,
    wishId: string,
    status: Status
}


export enum Status {
    RESERVE = "RESERVE",
    BOUGHT = "BOUGHT",
    FREE = "FREE"
}