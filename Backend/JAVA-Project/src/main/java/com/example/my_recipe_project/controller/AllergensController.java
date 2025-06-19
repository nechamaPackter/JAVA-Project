package com.example.my_recipe_project.controller;

import com.example.my_recipe_project.model.Allergens;
import com.example.my_recipe_project.service.AllergensService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "*")
public class AllergensController {

    private final AllergensService allergensService;

    @Autowired
    public AllergensController(AllergensService allergensService) {
        this.allergensService = allergensService;
    }

    @GetMapping("/allergens")
    public List<Allergens> getAllAllergens() {
        return allergensService.getAllAllergens();
    }
}
