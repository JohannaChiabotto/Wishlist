package com.example.backend;

import com.example.backend.repo.WishlistRepo;
import com.example.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;



@SpringBootTest
@AutoConfigureMockMvc
class WishlistControllerIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    @DirtiesContext
    void when_wishlist_build() throws Exception {
        mockMvc.perform(post("/api/wishlist")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                             "wishlistId": "123",
                             "name": "kind1",
                             "wishes":[]
                        }
                                """))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                             "name": "kind1"
                        }
                                """));

    }
}
