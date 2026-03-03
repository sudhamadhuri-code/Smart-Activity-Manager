package com.blog.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blog.model.Activity;

import java.util.List;

public interface ActivityRepository extends MongoRepository<Activity, String> {

    List<Activity> findByAuthor(String userId);
}