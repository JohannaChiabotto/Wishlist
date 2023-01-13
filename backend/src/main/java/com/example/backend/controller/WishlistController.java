package com.example.backend.controller;

import com.example.backend.model.WishDTO;
import com.example.backend.model.Wishlist;
import com.example.backend.model.WishlistDTO;
import com.example.backend.service.WishlistService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;


    public WishlistController(WishlistService wishlistService){
        this.wishlistService = wishlistService;
    }

    @PostMapping
    public Wishlist addWishlist(@RequestBody WishlistDTO wishlistRequest){
        return wishlistService.addWishlist(wishlistRequest);

    }

    @PutMapping("/add-wish/{id}")
    public Wishlist addWish (@PathVariable String id, @RequestBody WishDTO wish){
        return wishlistService.addWish(wish, id);
    }
}
