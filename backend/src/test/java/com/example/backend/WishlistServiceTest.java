package com.example.backend;

import com.example.backend.model.Wish;
import com.example.backend.model.Wishlist;
import com.example.backend.model.WishlistDTO;
import com.example.backend.repo.WishlistRepo;
import com.example.backend.service.IdService;
import com.example.backend.service.WishlistService;
import org.junit.jupiter.api.Test;

import java.util.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.Mockito.*;


class WishlistServiceTest {

    IdService idService = mock(IdService.class);
    WishlistRepo wishlistRepo = mock(WishlistRepo.class);
    WishlistService wishlistService = new WishlistService(idService, wishlistRepo);


    List<Wish> wishes = Collections.emptyList();

    @Test
    void listOfWishlistExpectEmptyList() {

        List<Wishlist> explist = new ArrayList<>();

        List<Wishlist> result = wishlistService.list();

        assertEquals(explist, result);
    }

    @Test
    void addWishlistTest() {

        WishlistDTO wishlistRequest = new WishlistDTO("kind1", wishes);
        Wishlist givenWishlist = new Wishlist("123", "kind1", wishes);

        when(idService.generateId()).thenReturn("123");
        when(wishlistRepo.save(givenWishlist)).thenReturn(givenWishlist);
        Wishlist result = wishlistService.createWishlist(wishlistRequest);

        verify(wishlistRepo).save(givenWishlist);
        assertEquals(givenWishlist, result);
    }


    @Test
     void testList() {
        Wishlist w1 = new Wishlist("idtest1", "lala", wishes);
        Wishlist w2 = new Wishlist("idtest2", "lele", wishes);
        List<Wishlist> expectedWishlists = Arrays.asList(w1, w2);
        when(wishlistRepo.findAll()).thenReturn(expectedWishlists);

        List<Wishlist> wishlists = wishlistService.list();

        assertEquals(expectedWishlists, wishlists);
    }

    @Test
    void deleteWishlist() throws IllegalAccessException {
        //GIVEN
        Wishlist givenWishlist = new Wishlist("testId", "aaa",wishes);
        doNothing().when(wishlistRepo).delete(givenWishlist);
        when(wishlistRepo.findById(givenWishlist.wishlistId())).thenReturn(Optional.of(givenWishlist));

        //WHEN
        wishlistRepo.delete(givenWishlist.withWishlistId("testId"));
        //THEN
        verify(wishlistRepo).delete(givenWishlist);

    }

    @Test
    void findWishlistById() throws IllegalAccessException {

        //GIVEN
        Wishlist givenWishlist = new Wishlist("testId", "image", wishes);
        when(wishlistRepo.findById("testId")).thenReturn(Optional.of(givenWishlist));


        //WHEN
        Wishlist result = wishlistService.findWishlistById(givenWishlist.wishlistId());
        //THEN
        verify(wishlistRepo).findById(givenWishlist.wishlistId());
        assertEquals(givenWishlist, result);
    }

    @Test
    public void search_testSearchWishlist() {
        //GIVEN
        when(wishlistRepo.findAll()).thenReturn(
                List.of(
                        new Wishlist("testId1","Samu", wishes),
                        new Wishlist("testId2","Elli", wishes),
                        new Wishlist("testId3","Raphaela", wishes)

                )
        );
        WishlistService wislistService = new WishlistService(wishlistRepo, idService);

        //WHEN
        List<Wishlist> actual = wishlistService.search("Ni");

        //THEN
        assertThat(actual, containsInAnyOrder(
                new Wishlist("testId1","Samu", wishes)
        ));


    }

}