// ReplayServiceImpl.java
package com.example.my_recipe_project.service;

import com.example.my_recipe_project.model.Replay;
import com.example.my_recipe_project.dal.ReplayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReplayServiceImpl implements ReplayService {

    private final ReplayRepository replayRepository;

    @Autowired
    public ReplayServiceImpl(ReplayRepository replayRepository) {
        this.replayRepository = replayRepository;
    }

    @Override
    public List<Replay> getAllReplays() {
        return replayRepository.findAll();
    }

    @Override
    public Optional<Replay> getReplayById(int id) {
        return replayRepository.findById(id);
    }

    @Override
    public Replay saveReplay(Replay replay) {
        return replayRepository.save(replay);
    }

    @Override
    public void deleteReplay(int id) {
        replayRepository.deleteById(id);
    }
}
