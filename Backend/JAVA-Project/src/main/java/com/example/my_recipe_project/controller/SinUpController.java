package com.example.my_recipe_project.controller;

import com.example.my_recipe_project.dal.AllergensRepository;
import com.example.my_recipe_project.dal.CustomersRepository;
import com.example.my_recipe_project.model.Allergens;
import com.example.my_recipe_project.model.Customers;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SinUpController {

    @Autowired
    private CustomersRepository customersRepository;

    @Autowired
    private AllergensRepository allergensRepository;

    // 🔵 1. הרשמת לקוח חדש
    @PostMapping("/customers/register")
    @Transactional
    public void registerCustomer(@RequestBody RegisterRequest request) {
        Customers customer = new Customers();
        customer.setName(request.name);
        customer.setEmail(request.email);
        customer.setPhoneNumber(request.phoneNumber);
        customer.setPassword(request.password);

        List<Allergens> selectedAllergens = allergensRepository.findAllById(request.allergenIds);
        customer.setAllergensList(selectedAllergens);

        customersRepository.save(customer);
    }

    // 🟡 מחלקת עזר לקליטת ההרשמה
    public static class RegisterRequest {
        public String name;
        public String email;
        public String phoneNumber;
        public String password;
        public List<Integer> allergenIds;
    }
}
