package com.codeclan.example.ShoppingListDB.controllers;

import com.codeclan.example.ShoppingListDB.models.User;
import com.codeclan.example.ShoppingListDB.repositories.FamilyRepository;
import com.codeclan.example.ShoppingListDB.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    FamilyRepository familyRepository;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/email=={email}")
    public ResponseEntity getUserByEmail(@PathVariable (value="email") String email){
        return new ResponseEntity(userRepository.findByEmail(email), HttpStatus.OK);
    }

    @PostMapping("/family/{familyId}")
    public Optional<User> createUser(@PathVariable (value = "familyId") Long familyId, @RequestBody User user) {
        return familyRepository.findById(familyId).map(family -> {
            user.setFamily(family);
            return userRepository.save(user);
        });
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable (value = "userId") Long userId){
        userRepository.deleteById(userId);
    }
}
