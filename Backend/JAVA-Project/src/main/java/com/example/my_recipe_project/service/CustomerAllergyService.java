// CustomerAllergyService.java
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.CustomerAllergy;
import java.util.List;
import java.util.Optional;

public interface CustomerAllergyService {
    List<CustomerAllergy> getAllCustomerAllergies();
    Optional<CustomerAllergy> getCustomerAllergyById(int id);
    CustomerAllergy saveCustomerAllergy(CustomerAllergy customerAllergy);
    void deleteCustomerAllergy(int id);
}
