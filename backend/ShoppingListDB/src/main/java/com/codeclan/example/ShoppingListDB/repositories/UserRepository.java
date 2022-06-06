package com.codeclan.example.ShoppingListDB.repositories;

import com.codeclan.example.ShoppingListDB.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

}
