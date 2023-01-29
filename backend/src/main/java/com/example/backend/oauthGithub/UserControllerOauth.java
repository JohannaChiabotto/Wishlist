package com.example.backend.oauthGithub;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users/oauth")
public class UserControllerOauth {

    private final GithubService githubService;

    public UserControllerOauth(GithubService githubService) {
        this.githubService = githubService;
    }

    @PostMapping("github")
    public void loginWithGithub(@RequestBody String code){
        githubService.loginWithGithub(code);
    }

}
