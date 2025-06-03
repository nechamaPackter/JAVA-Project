package com.example.my_recipe_project.dal;

import com.example.my_recipe_project.model.CustomerAllergy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerAllergyRepository extends JpaRepository<CustomerAllergy, Integer> {
}
