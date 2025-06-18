package com.example.my_recipe_project.controller;

import com.example.my_recipe_project.dal.ReplayRepository;
import com.example.my_recipe_project.model.Replay;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/replays")
@CrossOrigin(origins = "*") // כדי לאפשר קריאות מה-React
public class ReplayController {

    @Autowired
    private ReplayRepository replayRepository;

    // קבלת כל התגובות
    @GetMapping
    public List<Replay> getAllReplays() {
        return replayRepository.findAll();
    }

    // קבלת תגובה לפי מזהה
    @GetMapping("/{id}")
    public Optional<Replay> getReplayById(@PathVariable int id) {
        return replayRepository.findById(id);
    }

    // יצירת תגובה חדשה
    @PostMapping
    public Replay createReplay(@RequestBody Replay replay) {
        replay.setId(0); // ליצירת רשומה חדשה
        return replayRepository.save(replay);
    }

    // עדכון תגובה
    @PutMapping("/{id}")
    public Replay updateReplay(@PathVariable int id, @RequestBody Replay updatedReplay) {
        updatedReplay.setId(id);
        return replayRepository.save(updatedReplay);
    }

    // מחיקת תגובה
    @DeleteMapping("/{id}")
    public void deleteReplay(@PathVariable int id) {
        replayRepository.deleteById(id);
    }
}
