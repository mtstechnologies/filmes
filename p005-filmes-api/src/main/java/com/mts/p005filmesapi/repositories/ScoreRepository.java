package com.mts.p005filmesapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mts.p005filmesapi.entities.Score;
import com.mts.p005filmesapi.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
