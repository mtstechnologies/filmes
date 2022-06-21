package com.mts.p005filmesapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mts.p005filmesapi.dto.MovieDTO;
import com.mts.p005filmesapi.dto.ScoreDTO;
import com.mts.p005filmesapi.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService scoreService;
	
	@PutMapping
	public MovieDTO salvar(@RequestBody ScoreDTO dto){
		MovieDTO movieDTO = scoreService.salvarScore(dto);
		return movieDTO;
	}
}
