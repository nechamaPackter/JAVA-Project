// package com.example.my_recipe_project.controller;

// import com.example.my_recipe_project.model.Recipe;
// import com.example.my_recipe_project.repository.RecipeRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/recipes")
// @CrossOrigin(origins = "*") // מאפשר גישה מה-React
// public class RecipeController {

//     @Autowired
//     private RecipeRepository recipeRepository;

//     // מחזיר את כל המתכונים
//     @GetMapping
//     public List<Recipe> getAllRecipes() {
//         return recipeRepository.findAll();
//     }

//     // מחזיר מתכון לפי ID
//     @GetMapping("/{id}")
//     public Recipe getRecipeById(@PathVariable int id) {
//         return recipeRepository.findById(id)
//                 .orElseThrow(() -> new RuntimeException("Recipe not found with id: " + id));
//     }

//     // יצירת מתכון חדש
//     @PostMapping
//     public Recipe createRecipe(@RequestBody Recipe recipe) {
//         return recipeRepository.save(recipe);
//     }

//     // עדכון מתכון קיים
//     @PutMapping("/{id}")
//     public Recipe updateRecipe(@PathVariable int id, @RequestBody Recipe updatedRecipe) {
//         Recipe recipe = recipeRepository.findById(id)
//                 .orElseThrow(() -> new RuntimeException("Recipe not found with id: " + id));

//         recipe.setName(updatedRecipe.getName());
//         recipe.setInstructions(updatedRecipe.getInstructions());
//         recipe.setImageUrl(updatedRecipe.getImageUrl());
//         recipe.setLevel(updatedRecipe.getLevel());
//         recipe.setTypeFood(updatedRecipe.getTypeFood());
//         recipe.setDateCreated(updatedRecipe.getDateCreated());
//         recipe.setPreparationTime(updatedRecipe.getPreparationTime());

//         return recipeRepository.save(recipe);
//     }

//     // מחיקת מתכון
//     @DeleteMapping("/{id}")
//     public void deleteRecipe(@PathVariable int id) {
//         recipeRepository.deleteById(id);
//     }
// }
