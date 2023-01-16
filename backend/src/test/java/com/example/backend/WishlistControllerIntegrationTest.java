package com.example.backend;

import com.example.backend.model.Wishlist;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

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
        String saveResult = mockMvc.perform(
                        post("/api/wishlist")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {
                             "name": "kind1",
                             "wishes":[{
                                           "name":"wish1",
                                           "status":"FREE"
                                       }]
                        }
                                        """)
                )
                .andReturn()
                .getResponse()
                .getContentAsString();

        ObjectMapper objectMapper = new ObjectMapper();
        Wishlist saveResultWishlist = objectMapper.readValue(saveResult, Wishlist.class);
        String id = saveResultWishlist.wishlistId();

        mockMvc.perform(delete("/api/wishlist" + id))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/wishlist"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }
}