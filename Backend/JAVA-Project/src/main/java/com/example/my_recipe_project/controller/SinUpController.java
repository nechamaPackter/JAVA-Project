package com.example.my_recipe_project.controller;

import com.example.my_recipe_project.dal.CustomersRepository;
import com.example.my_recipe_project.model.Customers;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SinUpController {

    @Autowired
    private CustomersRepository customersRepository;

    // 🔵 1. הרשמת לקוח חדש
    @PostMapping("/customers/register")
    @Transactional
    public long registerCustomer(@RequestBody RegisterRequest request) {
        Customers customer = new Customers();
        customer.setName(request.name);
        customer.setEmail(request.email);
        customer.setPhoneNumber(request.phoneNumber);
        customer.setPassword(request.password);

        // המרה של רשימת מזהי האלרגיות למחרוזת מופרדת בפסיקים
        List<Integer> selectedAllergenIds = request.allergenIds;
        String allergenIdsString = selectedAllergenIds.stream()
                .map(String::valueOf)
                .collect(Collectors.joining(","));
        customer.setAllergenIds(allergenIdsString);

        Customers saved = customersRepository.save(customer);
        return saved.getId();
    }

    // 🟡 מחלקת עזר לקליטת ההרשמה
    public static class RegisterRequest {
        public String name;
        public String email;
        public String phoneNumber;
        public String password;
        public List<Integer> allergenIds; // 🟢 עכשיו זה תואם לקוד למעלה
    }
}
