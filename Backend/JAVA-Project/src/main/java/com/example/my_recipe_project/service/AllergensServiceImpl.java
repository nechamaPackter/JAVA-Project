package com.example.my_recipe_project.service;

import com.example.my_recipe_project.dal.AllergensRepository;
import com.example.my_recipe_project.model.Allergens;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AllergensServiceImpl implements AllergensService {

    private final AllergensRepository allergensRepository;

    @Autowired
    public AllergensServiceImpl(AllergensRepository allergensRepository) {
        this.allergensRepository = allergensRepository;
    }

    @Override
    public List<Allergens> getAllAllergens() {
        return allergensRepository.findAll();
    }

    @Override
    public Optional<Allergens> getAllergenById(int id) {
        return allergensRepository.findById(id);
    }

    @Override
    public Allergens saveAllergen(Allergens allergen) {
        return allergensRepository.save(allergen);
    }

    @Override
    public void deleteAllergen(int id) {
        allergensRepository.deleteById(id);
    }
}
