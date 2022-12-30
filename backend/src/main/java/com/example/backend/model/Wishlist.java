package com.example.backend.model;

import java.util.List;

public record Wishlist(
        String wishlistId,
        UserRole userRole,
        String name,
        List<Wish>wishes
        ) {
}
