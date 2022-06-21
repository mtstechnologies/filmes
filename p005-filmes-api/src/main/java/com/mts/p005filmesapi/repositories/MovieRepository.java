package com.mts.p005filmesapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mts.p005filmesapi.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
