export type Wishlist = {
    wishlistId: string,
    userRole: UserRole,
    name: string,
    wishes: Wish
}

export type Wish = {
    name: string,
    wishId: string,
    status: Status
}

export enum UserRole {
    ADMIN = "ADMIN",
    OWNER = "OWNER",
    GUEST = "GUEST"
}

export enum Status {
    RESERVE = "RESERVE",
    BOUGHT = "BOUGHT",
    FREE = "FREE"
}