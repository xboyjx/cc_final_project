package com.codeclan.example.ShoppingListDB.repositories;

import com.codeclan.example.ShoppingListDB.models.Family;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FamilyRepository extends JpaRepository<Family, Long> {
}
