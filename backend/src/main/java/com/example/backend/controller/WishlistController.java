package com.example.backend.controller;

import com.example.backend.model.Wishlist;
import com.example.backend.model.WishlistDTO;
import com.example.backend.service.WishlistService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/wishlists/{id}")
    public Wishlist getWishlist(@PathVariable String id) throws IllegalAccessException {
        return wishlistService.findWishlistById(id);
    }

    @GetMapping
    public List<Wishlist> listWishlist(@RequestParam Optional<String> search) {
        if (search.isPresent()) {
            return wishlistService.search(search.get());
        }
        return wishlistService.list();
    }

    @DeleteMapping("{id}")
    public void deleteWishlist(@PathVariable String id) throws IllegalAccessException {
        wishlistService.deleteWishlist(id);
    }
    
}
