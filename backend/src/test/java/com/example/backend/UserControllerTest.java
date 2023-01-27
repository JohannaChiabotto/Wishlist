package com.example.backend;

import com.example.backend.model.Wish;
import com.example.backend.model.Wishlist;
import com.example.backend.security.User;
import com.example.backend.security.UserRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.List;

import static com.example.backend.model.Status.FREE;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@AutoConfigureMockMvc
@SpringBootTest
public class UserControllerTest {

    @Autowired
    UserRepo userRepo;

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;


    @Test
    @DirtiesContext
    @WithMockUser(username="Jo",password = "samu")
    void helloMeWhenLoggedInExpectStatusOk() throws Exception {
        mockMvc.perform(get("/api/users/me")
                        .with(csrf()))
                .andExpect(status().isOk());
    }

    @Test
    @DirtiesContext
    @WithMockUser(username="Jo")
    void login() throws Exception {
        userRepo.save(new User("1", "Jo", "samu", "johanna.chiabotto@gmail.com",
                List.of(new Wishlist("2","Samu", List.of(new Wish("1", "Ball", FREE))))));
        mockMvc.perform(post("/api/users/login").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "username": "Jo",
                                    "password": "samu"
                                }
                                """))
                .andExpect(status().isOk())
                .andExpect(content().string("""
                                {"id":"1","username":"Jo","password":"samu","email":"johanna.chiabotto@gmail.com","wishlists":[{"wishlistId":"2","name":"Samu","wishes":[{"wishId":"1","name":"Ball","status":"FREE"}]}]}"""));
    }

    @Test
    @DirtiesContext
    @WithMockUser("Jo")
    void logout() throws Exception {
        mockMvc.perform(post("/api/users/logout").with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().string("anonymousUser"));
    }

    @Test
    @DirtiesContext
    void saveUser() throws Exception {
        MvcResult result = mockMvc.perform(post("/api/users/register")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "username": "Jo",
                                    "password": "samu",
                                    "email": "johanna.chiabotto@gmail.com"
                                }
                                """))
                .andExpect(status().isOk())
                .andReturn();
        String content = result.getResponse().getContentAsString();
        User user = objectMapper.readValue(content, User.class);
        assertNotNull(user);
    }

}