package com.blog.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.blog.model.Users;
import com.blog.repository.UserRepository;

@Service
public class MyOwnUserDetails implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String emailId) throws UsernameNotFoundException {
		// TODO Auto-generated method stub

		Users user = userRepository.findByEmail(emailId).get();
		String role = "ADMIN";

		return User.builder().username(user.getEmail()).password(user.getPassword()).roles(role).build();

	}

}
