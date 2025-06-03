// ProductAllergyService.java
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.ProductAllergy;
import java.util.List;
import java.util.Optional;

public interface ProductAllergyService {
    List<ProductAllergy> getAllProductAllergies();
    Optional<ProductAllergy> getProductAllergyById(int id);
    ProductAllergy saveProductAllergy(ProductAllergy productAllergy);
    void deleteProductAllergy(int id);
}
