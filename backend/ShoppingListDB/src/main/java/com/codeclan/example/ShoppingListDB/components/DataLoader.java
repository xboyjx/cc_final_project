package com.codeclan.example.ShoppingListDB.components;

import com.codeclan.example.ShoppingListDB.models.Family;
import com.codeclan.example.ShoppingListDB.models.Item;
import com.codeclan.example.ShoppingListDB.models.User;
import com.codeclan.example.ShoppingListDB.repositories.FamilyRepository;
import com.codeclan.example.ShoppingListDB.repositories.ItemRepository;
import com.codeclan.example.ShoppingListDB.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    FamilyRepository familyRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    UserRepository userRepository;

    public DataLoader(){}

    public void run(ApplicationArguments args){

        itemRepository.deleteAllInBatch();
        familyRepository.deleteAllInBatch();
        userRepository.deleteAllInBatch();

//        Add Items here
        Item milk = new Item("milk", 1.10, "https://digitalcontent.api.tesco.com/v2/media/ghs/7ae55910-3dd7-43bb-b89a-d00236927866/ac24df22-2111-47eb-b1bc-c0abf8688c45_250325805.jpeg?h=540&w=540");
        itemRepository.save(milk);

        Item bread = new Item("bread", 1.5, "https://digitalcontent.api.tesco.com/v2/media/ghs/e3948a26-5b24-4f46-b974-0a07238b7ad6/ab4c4e43-3f4c-4be0-a5a6-eee08d62a0de.jpeg?h=540&w=540");
        itemRepository.save(bread);

        Item weetabix = new Item("weetabix", 3.00, "https://digitalcontent.api.tesco.com/v2/media/ghs/458fb65b-b008-4d77-971b-8b1985aa67f9/afb83f24-fa76-4f47-9216-4ec3bcf0f843_1353541052.jpeg?h=540&w=540");
        itemRepository.save(weetabix);

        Item sensationsThaiSweetChilli = new Item("sensations thai sweet chilli", 1.99, "https://digitalcontent.api.tesco.com/v2/media/ghs/b9f49ef9-13b8-4b5a-bb0d-d575a981fa16/f26791db-85a9-4a6c-a059-99e5e395d13d_198210209.jpeg?h=540&w=540");
        itemRepository.save(sensationsThaiSweetChilli);




//        dont add items past here


        Family family = new Family("Callaghan");
        familyRepository.save(family);

        User jacob = new User("Jacob", "callaghanjacob@gmail.com",  "1234", family);
        userRepository.save(jacob);



    }

}
