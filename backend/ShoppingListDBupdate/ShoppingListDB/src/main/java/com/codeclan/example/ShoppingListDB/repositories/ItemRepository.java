package com.codeclan.example.ShoppingListDB.repositories;

import com.codeclan.example.ShoppingListDB.models.Item;
import com.codeclan.example.ShoppingListDB.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface ItemRepository extends JpaRepository<Item, Long> {

    List<Item> findByName(String name);
    List<Item> findByNameContaining(String name);

}
