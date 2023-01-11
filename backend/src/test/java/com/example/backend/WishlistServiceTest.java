package com.example.backend;

import com.example.backend.model.Wish;
import com.example.backend.model.Wishlist;
import com.example.backend.model.WishlistDTO;
import com.example.backend.repo.WishlistRepo;
import com.example.backend.service.IdService;
import com.example.backend.service.WishlistService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.data.domain.Example;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.bson.assertions.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


public class WishlistServiceTest {

    IdService idService = mock(IdService.class);
    WishlistRepo wishlistRepo = mock(WishlistRepo.class);
    WishlistService wishlistService = new WishlistService(idService, wishlistRepo);

    @InjectMocks
    private Example example;

    List<Wish> wishes = Collections.emptyList();

    @Test
    void listOfWishlistExpectEmptyList() {

        List<Wishlist> explist = new ArrayList<>();

        List<Wishlist> result = wishlistService.list();

        assertEquals(explist, result);
    }

    @Test
    void addWishlistTest() {
//given
        WishlistDTO wishlistRequest = new WishlistDTO("kind1", wishes);
        Wishlist givenWishlist = new Wishlist("123", "kind1", wishes);
//when
        when(idService.generateId()).thenReturn("123");
        when(wishlistRepo.save(givenWishlist)).thenReturn(givenWishlist);
        Wishlist result = wishlistService.addWishlist(wishlistRequest);
//then
        verify(wishlistRepo).save(givenWishlist);
        assertEquals(givenWishlist, result);
    }


    @Test
    public void testConstructor() {
        assertNotNull(wishlistService);
    }


    @Test
    public void testList() {
        Wishlist w1 = new Wishlist("idtest1", "lala", wishes);
        Wishlist w2 = new Wishlist("idtest2", "lele", wishes);
        List<Wishlist> expectedWishlists = Arrays.asList(w1, w2);
        when(wishlistRepo.findAll()).thenReturn(expectedWishlists);

        List<Wishlist> wishlists = wishlistService.list();

        assertEquals(expectedWishlists, wishlists);
    }

}
