package com.example.backend.service;

import com.example.backend.model.Wish;
import com.example.backend.model.WishDTO;
import com.example.backend.model.Wishlist;
import com.example.backend.model.WishlistDTO;
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


    public Wishlist addWishlist(WishlistDTO wishlistRequest){
        Wishlist newWishlistWithId = new Wishlist(
                idService.generateId(),
                wishlistRequest.name(),
                wishlistRequest.wishes().stream().map((wish)-> new Wish(idService.generateId(), wish.name(), wish.status())).toList()
        );
        return wishlistRepo.save(newWishlistWithId);

    }

    public Wishlist addWish(WishDTO wish, String wishListId){
        Wishlist wishlist = wishlistRepo.findById(wishListId).orElseThrow();
        Wish wishToSave = new Wish(idService.generateId(), wish.name(), wish.status());
        wishlist.wishes().add(wishToSave);
        wishlistRepo.save(wishlist);
        return wishlist;
    }

}
