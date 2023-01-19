package com.example.backend.githubOauth;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users/oauth")
public class UserController {

    private final GithubService githubService;

    public UserController(GithubService githubService) {
        this.githubService = githubService;
    }

    @PostMapping("github")
    public void loginWithGithub(@RequestBody String code){
        githubService.loginWithGithub(code);
    }

}
