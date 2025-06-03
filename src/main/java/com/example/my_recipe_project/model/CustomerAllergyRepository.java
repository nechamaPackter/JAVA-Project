package com.example.my_recipe_project.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data

public class CustomerAllergyRepository {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private int idCustomer;
    @Column
    private int idAllergen;

   
}