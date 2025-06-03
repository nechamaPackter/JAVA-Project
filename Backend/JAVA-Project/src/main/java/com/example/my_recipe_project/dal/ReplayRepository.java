package com.example.my_recipe_project.dal;

import com.example.my_recipe_project.model.Replay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReplayRepository extends JpaRepository<Replay, Integer> {
}
