package com.mts.p005filmesapi.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mts.p005filmesapi.dto.MovieDTO;
import com.mts.p005filmesapi.dto.ScoreDTO;
import com.mts.p005filmesapi.entities.Movie;
import com.mts.p005filmesapi.entities.Score;
import com.mts.p005filmesapi.entities.User;
import com.mts.p005filmesapi.repositories.MovieRepository;
import com.mts.p005filmesapi.repositories.ScoreRepository;
import com.mts.p005filmesapi.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;	
	
	@Transactional
	public MovieDTO salvarScore(ScoreDTO dto) {
		User user = userRepository.findByEmail(dto.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		//acessando uma lista avaliações relacionadas a um determinado filme
		double soma = 0.0;
		for(Score s : movie.getScores()) { //percorrendo todas as avaliações de um determinado filme
			soma = soma + s.getValue();
		}
		
		double media = soma / movie.getScores().size(); //o método size pega o tamanho da coleção
		
		movie.setScore(media);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepository.save(movie);	
		
		return new MovieDTO(movie);
	}
}
