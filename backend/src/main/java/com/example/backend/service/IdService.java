package com.example.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class IdService {
    @Value("wishId")
    private String customIdPrefix;

    public String generateId()
    {return UUID.randomUUID().toString();
    }


}
