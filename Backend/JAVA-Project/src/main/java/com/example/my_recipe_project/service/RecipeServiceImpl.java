package com.example.my_recipe_project.service;

import com.example.my_recipe_project.dal.RecipeRepository;
import com.example.my_recipe_project.model.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeServiceImpl implements RecipeService {

    private final RecipeRepository recipeRepository;

    @Autowired
    public RecipeServiceImpl(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @Override
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    @Override
    public Optional<Recipe> getRecipeById(int id) {
        return recipeRepository.findById(id);
    }

    @Override
    public Recipe saveRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @Override
    public void deleteRecipe(int id) {
        recipeRepository.deleteById(id);
    }
}
