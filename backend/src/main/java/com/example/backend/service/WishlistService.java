package com.example.backend.service;

import com.example.backend.model.Wishlist;
import com.example.backend.repo.WishlistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistService {
    private final IdService idService;
    private final WishlistRepo wishlistRepo;

    @Autowired
    public WishlistService(IdService idService, WishlistRepo wishlistRepo) {
        this.idService = idService;
        this.wishlistRepo = wishlistRepo;

    }

    public List<Wishlist> list() { return wishlistRepo.findAll(); }


    public Wishlist addWishlist(Wishlist wishlist){
        Wishlist newWishlistWithId = new Wishlist(
                idService.generateId(),
                wishlist.name(),
                wishlist.wishes()
        );
        return wishlistRepo.save(newWishlistWithId);

    }
}