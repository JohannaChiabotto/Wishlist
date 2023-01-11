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
public class IntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    IdService idService;
    @Autowired
    WishlistRepo wishlistRepo;
    @Test
    @DirtiesContext
    void when_wishlist_build() throws Exception {
        mockMvc.perform(post("/wishlist/create")
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
                             "name": "kind1",
                             "wishes":[]
                        }
                                """));

    }
}
