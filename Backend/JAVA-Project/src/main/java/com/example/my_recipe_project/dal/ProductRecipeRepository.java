package com.example.my_recipe_project.dal;

import com.example.my_recipe_project.model.ProductRecipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRecipeRepository extends JpaRepository<ProductRecipe, Integer> {
}
