// ProductRecipeServiceImpl.java
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.ProductRecipe;
import com.example.my_recipe_project.dal.ProductRecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductRecipeServiceImpl implements ProductRecipeService {

    private final ProductRecipeRepository productRecipeRepository;

    @Autowired
    public ProductRecipeServiceImpl(ProductRecipeRepository productRecipeRepository) {
        this.productRecipeRepository = productRecipeRepository;
    }

    @Override
    public List<ProductRecipe> getAllProductRecipes() {
        return productRecipeRepository.findAll();
    }

    @Override
    public Optional<ProductRecipe> getProductRecipeById(int id) {
        return productRecipeRepository.findById(id);
    }

    @Override
    public ProductRecipe saveProductRecipe(ProductRecipe productRecipe) {
        return productRecipeRepository.save(productRecipe);
    }

    @Override
    public void deleteProductRecipe(int id) {
        productRecipeRepository.deleteById(id);
    }
}
