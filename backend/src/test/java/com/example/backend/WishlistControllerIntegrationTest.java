package com.example.backend;

import com.example.backend.model.Wishlist;
import com.example.backend.repo.WishlistRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Collections;

import static org.bson.assertions.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;



@SpringBootTest
@AutoConfigureMockMvc
class WishlistControllerIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    WishlistRepo wishlistRepo;

    @Test
    @DirtiesContext
    void when_wishlist_build_return_wishlistWithId() throws Exception {
        MvcResult newWishlistRequestResult = mockMvc.perform(post("/api/wishlist")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                        {
                             "name": "kind1",
                             "wishes":[{
                                           "name":"wish1",
                                           "status":"FREE"
                                       }]
                        }
                                """))
                .andExpect(status().isOk())
                .andReturn();

        String wishlistRequestContent = newWishlistRequestResult.getResponse().getContentAsString();
        ObjectMapper objectMapper = new ObjectMapper();
        Wishlist wishlist = objectMapper.readValue(wishlistRequestContent, Wishlist.class);

        assertNotNull(wishlist.wishlistId());
        assertNotNull(wishlist.wishes().get(0).wishId());


    }

    @Test
    @DirtiesContext
    void deleteWishlist_shouldDeleteWishlistIfIdExists_whenDeleteRequestIsSuccessful() throws Exception {
        Wishlist wishlist = new Wishlist(
                "123", "nametest", Collections.emptyList()
        );
        wishlistRepo.save(wishlist);
        mockMvc.perform(delete("/api/wishlist/" + wishlist.wishlistId())).andExpect(status().isOk());
    }
}