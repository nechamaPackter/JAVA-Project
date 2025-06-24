package com.example.my_recipe_project.controller;

import com.example.my_recipe_project.dal.RecipeRepository;
import com.example.my_recipe_project.dal.CustomersRepository;
import com.example.my_recipe_project.model.Customers;
import com.example.my_recipe_project.model.Recipe;
import com.example.my_recipe_project.model.Allergens;
import com.example.my_recipe_project.model.Ingredient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "*")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private CustomersRepository customersRepository;

    // מחזיר את כל המתכונים
    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    // מחזיר מתכון לפי ID
    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable int id) {
        return recipeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recipe not found with id: " + id));
    }

    // יצירת מתכון חדש
    @PostMapping
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    // עדכון מתכון קיים
    @PutMapping("/{id}")
    public Recipe updateRecipe(@PathVariable int id, @RequestBody Recipe updatedRecipe) {
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recipe not found with id: " + id));

        recipe.setName(updatedRecipe.getName());
        recipe.setInstructions(updatedRecipe.getInstructions());
        recipe.setImageUrl(updatedRecipe.getImageUrl());
        recipe.setLevel(updatedRecipe.getLevel());
        recipe.setTypeFood(updatedRecipe.getTypeFood());
        recipe.setDateCreated(updatedRecipe.getDateCreated());
        recipe.setPreparationTime(updatedRecipe.getPreparationTime());

        return recipeRepository.save(recipe);
    }

    // מחיקת מתכון
    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable int id) {
        recipeRepository.deleteById(id);
    }

    // ✅ מתכון מתאים לפי אלרגיות לקוח
@GetMapping("/for-customer/{customerId}")
public List<Recipe> getRecipesWithoutAllergens(@PathVariable Integer customerId) {
    // שליפת הלקוח לפי מזהה
    Customers customer = customersRepository.findById(customerId).orElse(null);
    if (customer == null) return List.of(); // אם לא נמצא – מחזיר רשימה ריקה

    // חילוץ כל מזהי האלרגנים של הלקוח
    List<Integer> allergenIds = customer.getAllergensList().stream()
            .map(Allergens::getId)
            .collect(Collectors.toList());

    // סינון כל המתכונים לפי תנאי: שלא מכילים מרכיבים עם האלרגנים של הלקוח
    return recipeRepository.findAll().stream()
            .filter(recipe ->
                    recipe.getIngredients().stream()
                            .noneMatch(i ->
                                    i.getAllergen() != null &&
                                    allergenIds.contains(i.getAllergen().getId())
                            )
            )
            .collect(Collectors.toList());
}

}
