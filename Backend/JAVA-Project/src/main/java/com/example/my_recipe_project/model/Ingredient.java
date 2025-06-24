package com.example.my_recipe_project.model;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Table
@Data
public class Ingredient {
    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "allergen_id")
    private Allergens allergen; // אם קיים למרכיב אלרגן מסוים
}
