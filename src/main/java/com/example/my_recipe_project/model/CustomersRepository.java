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
public class CustomersRepository {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String phoneNumber;
    @Column
    private String password;

    
}