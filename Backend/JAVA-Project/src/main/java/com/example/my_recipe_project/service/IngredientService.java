package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.Ingredient;
import java.util.List;

public interface IngredientService {
    List<Ingredient> getAllIngredients();
    List<Ingredient> getIngredientsByRecipe(int recipeId);
    Ingredient saveIngredient(Ingredient ingredient);
    void deleteIngredient(int id);
}


