// ProductRecipeService.java
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.ProductRecipe;
import java.util.List;
import java.util.Optional;

public interface ProductRecipeService {
    List<ProductRecipe> getAllProductRecipes();
    Optional<ProductRecipe> getProductRecipeById(int id);
    ProductRecipe saveProductRecipe(ProductRecipe productRecipe);
    void deleteProductRecipe(int id);
}
