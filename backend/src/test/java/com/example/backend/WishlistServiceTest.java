package com.example.backend;

import com.example.backend.model.Wish;
import com.example.backend.model.Wishlist;
import com.example.backend.repo.WishlistRepo;
import com.example.backend.service.IdService;
import com.example.backend.service.WishlistService;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;





public class WishlistServiceTest {

    IdService idService = mock(IdService.class);
    WishlistRepo wishlistRepo = mock(WishlistRepo.class);
    WishlistService wishlistService = new WishlistService(idService, wishlistRepo);

    List<Wish>wishes = Collections.emptyList();

    @Test
    void listOfWishlistExpectEmptyList() {

        List<Wishlist> explist = new ArrayList<>();

        List<Wishlist> result = wishlistService.list();

        assertEquals(explist, result);
    }

    @Test
    void addWishlistTest(){

        Wishlist givenWishlist = new Wishlist("123", "kind1", wishes);

        when(idService.generateId()).thenReturn("123");
        when(wishlistRepo.save(givenWishlist)).thenReturn(givenWishlist);
        Wishlist result = wishlistService.addWishlist(givenWishlist);

        verify(wishlistRepo).save(givenWishlist);
        assertEquals(givenWishlist, result);
    }
}
