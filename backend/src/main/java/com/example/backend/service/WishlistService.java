package com.example.backend.service;

import com.example.backend.model.Wish;
import com.example.backend.model.Wishlist;
import com.example.backend.model.WishlistDTO;
import com.example.backend.repo.WishlistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
                AddWishesId(wishlistRequest.wishes())
        );
        return wishlistRepo.save(newWishlistWithId);

    }
    
    public List<Wish> AddWishesId(List<Wish> wishes){
        List<Wish> wishList = new ArrayList<>();
        for (Wish wish: wishes) {
            String wishId = idService.generateId();
            Wish newWish = new Wish(wishId, wish.name(), wish.status());
            wishList.add(newWish);
        }
        return wishList;
    }
}
