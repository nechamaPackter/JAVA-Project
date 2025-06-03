package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.Allergens;
import java.util.List;
import java.util.Optional;

public interface AllergensService {
    List<Allergens> getAllAllergens();
    Optional<Allergens> getAllergenById(int id);
    Allergens saveAllergen(Allergens allergen);
    void deleteAllergen(int id);
}
