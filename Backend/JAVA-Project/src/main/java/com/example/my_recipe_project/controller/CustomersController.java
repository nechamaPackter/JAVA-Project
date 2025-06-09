// package com.example.my_recipe_project.controller;

// public class LoginController {
    
// }

package com.example.my_recipe_project.controller;

import com.example.my_recipe_project.dal.CustomersRepository;
import com.example.my_recipe_project.model.Customers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "*") // כדי לאפשר חיבור מ־React
public class CustomersController {

    @Autowired
    private CustomersRepository customersRepository;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        Optional<Customers> customer = customersRepository.findByEmailAndPassword(
                request.getEmail(), request.getPassword());

        return customer.isPresent()
                ? new LoginResponse(true)
                : new LoginResponse(false);
    }

    public static class LoginRequest {
        private String email;
        private String password;

        // Getters & Setters
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }

    public static class LoginResponse {
        private boolean success;

        public LoginResponse(boolean success) { this.success = success; }

        public boolean isSuccess() { return success; }
        public void setSuccess(boolean success) { this.success = success; }
    }
}

