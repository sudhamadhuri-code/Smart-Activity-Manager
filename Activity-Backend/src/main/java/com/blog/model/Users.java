package com.blog.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;

@Document(collection = "users")
public class Users {

    @Id
    private String id;   // MongoDB uses String (ObjectId)

    @NotBlank
    private String name;

    @NotBlank
    private String password;
    
    @NotBlank
    private String email;

    private String role;

    // Constructors
    public Users() {}

    public Users(String name, String password, String role) {
        this.name = name;
        this.password = password;
        this.role = role;
    }

    // Getters & Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    
    
}