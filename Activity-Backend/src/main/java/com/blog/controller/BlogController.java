package com.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.pojo.BlogSuggestionRequest;
import com.blog.service.BlogAIService;

@RestController
@RequestMapping("/blogAiController")
public class BlogController {

	@Autowired
	private BlogAIService blogAIService;

	@PostMapping("/suggest")
	public String suggest(@RequestBody BlogSuggestionRequest request) {
		
		try {
			return blogAIService.generateBlog(request.getCurrentContent());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
			return e.getMessage();
		}
	}

}
