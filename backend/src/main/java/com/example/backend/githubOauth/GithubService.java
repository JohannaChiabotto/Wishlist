package com.example.backend.githubOauth;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


@Service
public class GithubService {

    private String clientId = "e9b3ad0497784a5fe865";

    private String clientSecret = "a736c36a61b93a757df57826fbc1779232079004";
    public String loginWithGithub(String code){
        WebClient webClient = WebClient.create();

        GithubAccessTokenDto accessTokenDto = webClient.post()
                .uri("https://github.com/login/oauth/access_token?code=" + "&client_id=" + clientId + "&client_create=" + clientSecret)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .toEntity(GithubAccessTokenDto.class)
                .block()
                .getBody();

        return accessTokenDto.accessToken();

    }
}
