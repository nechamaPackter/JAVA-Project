package com.example.my_recipe_project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Column;
import lombok.Data;

@Entity
@Table
@Data
public class Allergens {

    @Id
    @GeneratedValue
    private int Id;

    @Column
    private String name;
}
