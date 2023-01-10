package com.example.backend.repo;

import com.example.backend.model.Wishlist;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WishlistRepo extends MongoRepository<Wishlist,String> {
}
