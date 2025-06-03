// ReplayService.java
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.Replay;
import java.util.List;
import java.util.Optional;

public interface ReplayService {
    List<Replay> getAllReplays();
    Optional<Replay> getReplayById(int id);
    Replay saveReplay(Replay replay);
    void deleteReplay(int id);
}
