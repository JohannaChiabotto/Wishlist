package com.example.backend;

import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;


@AutoConfigureMockMvc
@SpringBootTest
public class UserControllerTest {

    /*@Autowired
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
    }*/

    /*@Test
    @DirtiesContext
    @WithMockUser(username="jo")
    void login() throws Exception {
        userRepo.save(new User("1", "jo", "123", "johannamoeller-92@web.com",
                new Wishlist("2","johanna", List.of(new Wish("1", "Ball", "FREE")))));
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
                                {"id":"1","name":"jo","password":"123","email":"johannamoeller-92@web.de","wishlist":{"id":"2","name":"johanna","wishes":[{"id":"2","name":"Ball","status":"FREE"}]}}"""));
    }

*/
}
