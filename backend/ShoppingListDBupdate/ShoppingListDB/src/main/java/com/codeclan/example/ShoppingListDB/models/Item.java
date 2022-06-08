package com.codeclan.example.ShoppingListDB.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private double price;

    @Column(name= "imgUrl")
    private String imgUrl;

    @JsonIgnoreProperties({"email", "password", "family"})
    @ManyToMany
    @JoinTable(
            name="user_items",
            joinColumns = @JoinColumn(name = "item_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> users;

    @JsonIgnore
    @ManyToMany(mappedBy = "shoppingList")
    private List<Family> families;

    public Item(String name, double price, String imgUrl) {
        this.name = name;
        this.price = price;
        this.imgUrl = imgUrl;
        this.users = new ArrayList<>();
        this.families= new ArrayList<>();
    }

    public Item(){}

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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Family> getFamilies() {
        return families;
    }

    public void setFamilies(List<Family> families) {
        this.families = families;
    }

    public void addUserToUsersList(User user){
        users.add(user);
    }

    public void removeUserFromUsersList(User user){
        users.remove(user);
    }
}
