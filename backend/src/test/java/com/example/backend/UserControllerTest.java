package com.example.backend;

import com.example.backend.model.Status;
import com.example.backend.model.Wish;
import com.example.backend.model.Wishlist;
import com.example.backend.security.User;
import com.example.backend.security.UserRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;

import java.util.List;

import static org.springframework.http.RequestEntity.post;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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
    @WithMockUser(username = "jo", password = "123")
    void helloMeWhenLoggedInExpectStatusOk() throws Exception {
        mockMvc.perform(get("/api/users/me")
                        .with(csrf()))
                .andExpect(status().isOk());
    }

    @Test
    @DirtiesContext
    @WithMockUser(username="jo")
    void login() throws Exception {
        userRepo.save(new User("1", "jo", "123", "johannamoeller-92@web.com",
                new Wishlist("2","johanna", List.of(new Wish("1", "Ball", Status.FREE))))));
        mockMvc.perform(post("/api/users/login").with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "username": "jo",
                                    "password": "123"
                                }
                                """))
                .andExpect(status().isOk())
                .andExpect(content().string("""
                                {"id":"1","name":"jo","password":"123","email":"johannamoeller-92@web.de","wishlist":{"id":"2","name":"johanna","wishes":[{"id":"2","name":"name","shopUrl":"shop"}]}}"""));
    }


}
