package com.example.backend.controller;

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
    public Wishlist createWishlist(@RequestBody WishlistDTO wishlistRequest){
        return wishlistService.createWishlist(wishlistRequest);

    }

    @DeleteMapping("{id}")
    public void deleteWishlist(@PathVariable String id) throws IllegalAccessException {
        wishlistService.deleteWishlist(id);
    }

}
