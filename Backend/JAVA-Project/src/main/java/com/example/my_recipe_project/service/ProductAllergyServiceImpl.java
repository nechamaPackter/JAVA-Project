// ProductAllergyServiceImpl.java
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.ProductAllergy;
import com.example.my_recipe_project.dal.ProductAllergyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductAllergyServiceImpl implements ProductAllergyService {

    private final ProductAllergyRepository productAllergyRepository;

    @Autowired
    public ProductAllergyServiceImpl(ProductAllergyRepository productAllergyRepository) {
        this.productAllergyRepository = productAllergyRepository;
    }

    @Override
    public List<ProductAllergy> getAllProductAllergies() {
        return productAllergyRepository.findAll();
    }

    @Override
    public Optional<ProductAllergy> getProductAllergyById(int id) {
        return productAllergyRepository.findById(id);
    }

    @Override
    public ProductAllergy saveProductAllergy(ProductAllergy productAllergy) {
        return productAllergyRepository.save(productAllergy);
    }

    @Override
    public void deleteProductAllergy(int id) {
        productAllergyRepository.deleteById(id);
    }
}
