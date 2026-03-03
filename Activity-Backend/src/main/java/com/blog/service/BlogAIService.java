package com.blog.service;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

@Service
public class BlogAIService {



    @Value("${openrouter.api.key}")
    private String apiKey;

    @Value("${openrouter.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    private final ObjectMapper objectMapper = new ObjectMapper();

    
    public String generateBlog(String topic) {

    	String requestBody = """
    			{
    			  "model": "meta-llama/llama-3-8b-instruct",
    			  "max_tokens": 350,
    			  "messages": [
    			    {
    			      "role": "user",
    			      "content": "Write a short professional blog (300-400 words) with headings on: %s"
    			    }
    			  ]
    			}
    			""".formatted(topic);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);
        headers.set("HTTP-Referer", "http://localhost:8881");
        headers.set("X-Title", "SpringBoot-AI-Assignment");

        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.POST, entity, String.class);

        System.out.println(response.getBody());

        // Parse JSON and extract only content
        JsonNode root = objectMapper.readTree(response.getBody());
        return root
                .path("choices")
                .get(0)
                .path("message")
                .path("content")
                .asText();
        
    }
    
    


}
