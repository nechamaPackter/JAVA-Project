// CustomerAllergyServiceImpl.java
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.CustomerAllergy;
import com.example.my_recipe_project.dal.CustomerAllergyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerAllergyServiceImpl implements CustomerAllergyService {

    private final CustomerAllergyRepository customerAllergyRepository;

    @Autowired
    public CustomerAllergyServiceImpl(CustomerAllergyRepository customerAllergyRepository) {
        this.customerAllergyRepository = customerAllergyRepository;
    }

    @Override
    public List<CustomerAllergy> getAllCustomerAllergies() {
        return customerAllergyRepository.findAll();
    }

    @Override
    public Optional<CustomerAllergy> getCustomerAllergyById(int id) {
        return customerAllergyRepository.findById(id);
    }

    @Override
    public CustomerAllergy saveCustomerAllergy(CustomerAllergy customerAllergy) {
        return customerAllergyRepository.save(customerAllergy);
    }

    @Override
    public void deleteCustomerAllergy(int id) {
        customerAllergyRepository.deleteById(id);
    }
}
