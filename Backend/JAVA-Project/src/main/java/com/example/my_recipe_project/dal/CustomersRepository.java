package com.example.my_recipe_project.dal;

import com.example.my_recipe_project.model.Customers;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomersRepository extends JpaRepository<Customers, Integer> {

    Optional<Customers> findByEmailAndPassword(String email, String password);
}
