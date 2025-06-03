// ProductService.java
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.Product;
import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(int id);
    Product saveProduct(Product product);
    void deleteProduct(int id);
}
