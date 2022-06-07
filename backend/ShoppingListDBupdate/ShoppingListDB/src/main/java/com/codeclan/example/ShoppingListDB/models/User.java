package com.codeclan.example.ShoppingListDB.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;

    @JsonIgnore
    @ManyToMany(mappedBy = "users")
    private List<Item> itemsAdded;

    @JsonIgnoreProperties({"familyMembers" , "shoppingList"})
    @ManyToOne
    @JoinColumn(name = "family_id", nullable = false)
    private Family family;

    public User(String name, String email, String password, Family family) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.itemsAdded= new ArrayList<>();
        this.family = family;
    }

    public User(){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Item> getItemsAdded() {
        return itemsAdded;
    }

    public void setItemsAdded(List<Item> itemsAdded) {
        this.itemsAdded = itemsAdded;
    }

    public Family getFamily() {
        return family;
    }

    public void setFamily(Family family) {
        this.family = family;
    }

    public void addItemToItemList(Item item){
        itemsAdded.add(item);
    }

}
