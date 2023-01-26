package com.example.backend.oauthGithub;

import com.fasterxml.jackson.annotation.JsonProperty;

public record GithubAccessTokenDto(
        @JsonProperty("access_token")
        String accessToken
) {
}