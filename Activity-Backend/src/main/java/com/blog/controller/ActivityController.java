package com.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.blog.model.Activity;
import com.blog.service.ActivityService;

@RestController
@RequestMapping("/activities")
@CrossOrigin(origins = "*")
public class ActivityController {

	@Autowired
	private ActivityService activityService;

	// Create
	@PostMapping
	public Activity createActivity(@RequestBody Activity activity) {
		return activityService.createActivity(activity);
	}

	// Get All
	@GetMapping("getAllActivitiesByUser/{emailId}")
	public List<Activity> getAllActivities(@PathVariable String emailId) {
		return activityService.getAllActivities(emailId);
	}

	// Get By Id
	@GetMapping("/{id}")
	public Activity getActivityById(@PathVariable String id) {
		return activityService.getActivityById(id);
	}

	// Update
	@PutMapping("/{id}")
	public Activity updateActivity(@PathVariable String id, @RequestBody Activity activity) {
		return activityService.updateActivity(id, activity);
	}

	// Delete
	@DeleteMapping("/{id}")
	public String deleteActivity(@PathVariable String id) {
		activityService.deleteActivity(id);
		return "Activity deleted successfully";
	}
}