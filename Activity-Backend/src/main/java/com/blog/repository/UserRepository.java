package com.blog.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blog.model.Users;

import java.util.Optional;

public interface UserRepository extends MongoRepository<Users, String> {
   
	Optional<Users> findByEmail(String email);
	
	Optional<Users> findByName(String userName);
	
    
    boolean existsByEmail(String name);
    
}