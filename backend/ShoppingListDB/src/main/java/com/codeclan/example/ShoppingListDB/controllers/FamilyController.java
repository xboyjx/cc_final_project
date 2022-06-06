package com.codeclan.example.ShoppingListDB.controllers;

import com.codeclan.example.ShoppingListDB.models.Family;
import com.codeclan.example.ShoppingListDB.models.Item;
import com.codeclan.example.ShoppingListDB.repositories.FamilyRepository;
import com.codeclan.example.ShoppingListDB.repositories.ItemRepository;
import com.codeclan.example.ShoppingListDB.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/families")
public class FamilyController {

    @Autowired
    FamilyRepository familyRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<Family>> getAllFamilies(){
        return new ResponseEntity<>(familyRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    ResponseEntity getFamilyById(@PathVariable (value = "id") Long id){
        return new ResponseEntity<>(familyRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public Family createFamily(@RequestBody Family family){
        return familyRepository.save(family);
    }

    @PutMapping("/{familyId}/item/{itemId}")
    public Family addItemToFamilyList(
            @PathVariable Long familyId,
            @PathVariable Long itemId
    ) {
        Family family = familyRepository.findById(familyId).get();
        Item item = itemRepository.findById(itemId).get();
        family.addItemToShoppingList(item);
        return familyRepository.save(family);
    }

    @PutMapping("/{familyId}/removeItem/{itemId}")
    public Family removeItemFromFamilyList(
            @PathVariable Long familyId,
            @PathVariable Long itemId
    ){
        Family family = familyRepository.findById(familyId).get();
        Item item = itemRepository.findById(itemId).get();
        family.removeItemFromShoppingList(item);
        return familyRepository.save(family);
    }


}
