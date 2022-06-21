package com.mts.p005filmesapi.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mts.p005filmesapi.dto.MovieDTO;
import com.mts.p005filmesapi.entities.Movie;
import com.mts.p005filmesapi.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	//fazendo uma busca paginada
	@Transactional(readOnly = true) // indicando que é somente leitura
	public Page<MovieDTO> findAll(Pageable pageable){
		Page<Movie> resultado = repository.findAll(pageable); //recebendo as paginas da entidade
		Page<MovieDTO> page = resultado.map(x -> new MovieDTO(x)); //convertendo o resultado para DTO
		return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id){
		Movie resultado = repository.findById(id).get();//para acessar o objeto que está dentro do Optional, é necessário .get()
		MovieDTO dto = new MovieDTO(resultado); //convertendo o resultado para DTO
		return dto;
	}
	
}
