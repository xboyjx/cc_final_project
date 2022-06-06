package com.codeclan.example.ShoppingListDB.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "families")
public class Family {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "family_name")
    private String familyName;

    @JsonIgnoreProperties({"family"})
    @OneToMany(mappedBy = "family", fetch = FetchType.LAZY)
    private List<User> familyMembers;

    @ManyToMany
    @JoinTable(
            name="family_items",
            joinColumns = @JoinColumn(name = "family_id"),
            inverseJoinColumns = @JoinColumn(name = "item_id")
    )
    private List<Item> shoppingList;

    public Family(String familyName) {
        this.familyName = familyName;
        this.familyMembers = new ArrayList<>();
        this.shoppingList = new ArrayList<>();
    }

    public Family(){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFamilyName() {
        return familyName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }

    public List<User> getFamilyMembers() {
        return familyMembers;
    }

    public void setFamilyMembers(ArrayList<User> familyMembers) {
        this.familyMembers = familyMembers;
    }

    public List<Item> getShoppingList() {
        return shoppingList;
    }

    public void setShoppingList(ArrayList<Item> shoppingList) {
        this.shoppingList = shoppingList;
    }

    public void addFamilyMember(User user){
        familyMembers.add(user);
    }

    public void addItemToShoppingList(Item item){
        shoppingList.add(item);
    }

    public void removeItemFromShoppingList(Item item){
        shoppingList.remove(item);
    }
}
