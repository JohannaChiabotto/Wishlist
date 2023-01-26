package com.example.backend.security;

import com.example.backend.model.Wishlist;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("users")
public record User(
        @Id
        String id,
        String username,
        String password,
        String email,
        List<Wishlist> wishlists
) {
}

