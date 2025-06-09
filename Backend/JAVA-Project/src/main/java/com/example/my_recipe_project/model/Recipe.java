package com.example.my_recipe_project.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table

//  enum Level {
//     EASY,
//     MEDIUM,
//     HARD
// }

//   enum TypeFood{
//     Main_courses,
//     Last_courses,
//     Starters,
//     Soup,
//     Pies,
//     Cakes,
// }
public class Recipe {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private String name;
    
    
    @Column
    private String instructions;
    
    @Column
    private String imageUrl;
    @Column
    private String level;

    @Column 
    private String typeFood;
    @Column
    private LocalDate dateCreated;
    @Column
    private int preparationTime; 




    // Additional fields can be added as needed, such as preparation time, cooking time, etc.
}   