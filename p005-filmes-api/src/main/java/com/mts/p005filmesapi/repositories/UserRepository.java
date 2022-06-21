package com.mts.p005filmesapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mts.p005filmesapi.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);
}
