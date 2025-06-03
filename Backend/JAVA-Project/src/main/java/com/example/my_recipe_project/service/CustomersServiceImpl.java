// CustomersServiceImpl.java
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.Customers;
import com.example.my_recipe_project.dal.CustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomersServiceImpl implements CustomersService {

    private final CustomersRepository customersRepository;

    @Autowired
    public CustomersServiceImpl(CustomersRepository customersRepository) {
        this.customersRepository = customersRepository;
    }

    @Override
    public List<Customers> getAllCustomers() {
        return customersRepository.findAll();
    }

    @Override
    public Optional<Customers> getCustomerById(int id) {
        return customersRepository.findById(id);
    }

    @Override
    public Customers saveCustomer(Customers customer) {
        return customersRepository.save(customer);
    }

    @Override
    public void deleteCustomer(int id) {
        customersRepository.deleteById(id);
    }
}
