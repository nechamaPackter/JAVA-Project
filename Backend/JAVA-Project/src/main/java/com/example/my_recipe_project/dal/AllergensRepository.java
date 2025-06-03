package com.example.my_recipe_project.dal;

import com.example.my_recipe_project.model.Allergens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AllergensRepository extends JpaRepository<Allergens, Integer> {
    // את יכולה להוסיף פה שאילתות מותאמות אישית אם צריך
}
