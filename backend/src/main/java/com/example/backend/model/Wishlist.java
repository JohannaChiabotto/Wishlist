package com.example.backend.model;

import lombok.With;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@With
@Document("wishlists")
public record Wishlist(
        @Id
        String wishlistId,
        String name,
        List<Wish>wishes
        ) {
}
