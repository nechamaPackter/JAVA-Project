// CustomersService.java
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.Customers;
import java.util.List;
import java.util.Optional;

public interface CustomersService {
    List<Customers> getAllCustomers();
    Optional<Customers> getCustomerById(int id);
    Customers saveCustomer(Customers customer);
    void deleteCustomer(int id);
}
