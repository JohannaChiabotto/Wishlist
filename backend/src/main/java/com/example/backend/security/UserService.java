package com.example.backend.security;

import com.example.backend.service.Argon2Service;
import com.example.backend.service.IdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo userRepo;
    private final IdService idService;
    private final Argon2Service argon2Service;

    @Autowired
    public UserService(UserRepo userRepo, IdService idService, Argon2Service argon2Service) {
        this.userRepo = userRepo;
        this.idService = idService;
        this.argon2Service = argon2Service;
    }
    public User saveUser( User user) {
        User userToSave= new User(
                idService.generateId(),
                user.username(),
                argon2Service.encode(user.password()),
                user.email(),
                new ArrayList<>()
        );

        userRepo.save(userToSave);

        return new User(
                userToSave.id(),
                userToSave.username(),
                "***",
                userToSave.email(),
                new ArrayList<>()
        );
    }



    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public Optional<User> getUserByUsername(String username){
        return userRepo.findByName(username);
    }

    public Optional<User> getUserById(String id){
        return userRepo.findById(id);
    }

}
