package com.example.my_recipe_project.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data
public class ReplayRepository {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private int idCustomer;

    @Column
    private int idProduct;

    @Column
    private String content;

    @Column
    private int like;
    @Column
    private int dislike;

    @Column
    private LocalDate date;

}