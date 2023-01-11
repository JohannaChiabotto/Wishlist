package com.example.backend.model;

import java.util.List;

public record WishlistDTO(
        String name,
        List<Wish> wishes
) {
}
