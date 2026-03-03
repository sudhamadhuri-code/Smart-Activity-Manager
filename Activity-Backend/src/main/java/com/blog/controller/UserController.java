package com.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.blog.pojo.UserSaveReq;
import com.blog.service.UserService;

import jakarta.validation.Valid;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@PutMapping("/users")
	public ResponseEntity<String> updateUser(@Valid @RequestBody UserSaveReq userSaveReq) {

		userService.updateUser(userSaveReq);
		return ResponseEntity.ok("User updated successfully");
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable String id) {

		userService.deleteUser(id);
		return ResponseEntity.ok("User deleted successfully");
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<UserSaveReq>> loadAllUsers() {

		List<UserSaveReq> all =	userService.loadAllUsers();
		return ResponseEntity.status(HttpStatus.CREATED).body(all);
	}
}

