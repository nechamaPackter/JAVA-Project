package com.example.my_recipe_project.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Table
@Data
public class Allergens {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private String name;

    // @ManyToMany(mappedBy = "allergensList")
    // private List<Customers> customers; // לקוחות שאלרגיים לאלרגן הזה
}
