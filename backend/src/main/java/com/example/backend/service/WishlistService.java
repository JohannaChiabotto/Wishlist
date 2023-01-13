package com.example.backend.service;

import com.example.backend.model.Wish;
import com.example.backend.model.Wishlist;
import com.example.backend.model.WishlistDTO;
import com.example.backend.repo.WishlistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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


    public Wishlist createWishlist(WishlistDTO wishlistRequest){
        Wishlist newWishlistWithId = new Wishlist(
                idService.generateId(),
                wishlistRequest.name(),
                wishlistRequest.wishes().stream().map((wish)-> new Wish(idService.generateId(), wish.name(), wish.status())).toList()
        );
        return wishlistRepo.save(newWishlistWithId);

    }

    public Wishlist findWishlistById(String id) throws IllegalAccessException {
        Optional<Wishlist> optionalWishlist = wishlistRepo.findById(id);
        if (optionalWishlist.isPresent()) {
            return optionalWishlist.get();
        }
        throw new IllegalAccessException("Id not found");
    }

    public void deleteWishlist(String id) throws IllegalAccessException {
        Wishlist wishlist = findWishlistById(id);
        wishlistRepo.delete(wishlist);
    }

}