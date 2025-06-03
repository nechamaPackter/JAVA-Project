
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.Recipe;

import java.util.List;
import java.util.Optional;

public interface RecipeService {
    List<Recipe> getAllRecipes();
    Optional<Recipe> getRecipeById(int id);
    Recipe saveRecipe(Recipe recipe);
    void deleteRecipe(int id);
}
