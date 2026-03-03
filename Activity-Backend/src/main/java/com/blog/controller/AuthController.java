package com.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.pojo.ErrorResponse;
import com.blog.pojo.LoginReqPojo;
import com.blog.pojo.LoginResponse;
import com.blog.pojo.UserSaveReq;
import com.blog.security.JwtUtil;
import com.blog.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserService userService;

	@Autowired
	private JwtUtil jwtUtil;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginReqPojo loginReqPojo) {

		try {

			Authentication auth = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(loginReqPojo.getEmailId(), loginReqPojo.getPassword()));

			String token = jwtUtil.generateToken(loginReqPojo.getEmailId());

			return ResponseEntity.ok(new LoginResponse("Login success", token));

		} catch (BadCredentialsException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body(new ErrorResponse("Invalid username or password"));
		} catch (UsernameNotFoundException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse("User does not exist"));
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ErrorResponse("Login failed due to server error"));
		}

	}

	@PostMapping("/register")
	public ResponseEntity<String> saveUser(@Valid @RequestBody UserSaveReq userSaveReq) {

		try {
			userService.saveUser(userSaveReq);
			return ResponseEntity.status(HttpStatus.CREATED).body("User saved successfully");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
		}
	}

}