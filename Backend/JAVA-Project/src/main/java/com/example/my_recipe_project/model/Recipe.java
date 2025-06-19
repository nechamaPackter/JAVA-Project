package com.example.my_recipe_project.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
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

    // === Getters and Setters ===

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getTypeFood() {
        return typeFood;
    }

    public void setTypeFood(String typeFood) {
        this.typeFood = typeFood;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    public int getPreparationTime() {
        return preparationTime;
    }

    public void setPreparationTime(int preparationTime) {
        this.preparationTime = preparationTime;
    }

    // אפשר להחזיר את ה-enums אם תרצי להשתמש בהם:
    /*
    enum Level {
        EASY,
        MEDIUM,
        HARD
    }

    enum TypeFood {
        Main_courses,
        Last_courses,
        Starters,
        Soup,
        Pies,
        Cakes
    }
    */
}
