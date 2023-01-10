package com.example.backend.repo;

import com.example.backend.model.Wishlist;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WishlistRepo extends MongoRepository<Wishlist,String> {
}
