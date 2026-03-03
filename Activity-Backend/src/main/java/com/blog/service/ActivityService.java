package com.blog.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.model.Activity;
import com.blog.model.Users;
import com.blog.repository.ActivityRepository;
import com.blog.repository.UserRepository;

@Service
public class ActivityService {

	@Autowired
	private ActivityRepository activityRepository;

	@Autowired
	private UserRepository userRepository;

	// Create
	public Activity createActivity(Activity activity) {
		
		Optional<Users> byName = userRepository.findByEmail(activity.getAuthor());
		activity.setAuthor(byName.get().getId());
		
		return activityRepository.save(activity);
	}

	// Get All
	public List<Activity> getAllActivities(String emailId) {
		Optional<Users> byName = userRepository.findByEmail(emailId);
		return activityRepository.findByAuthor(byName.get().getId());
	}

	// Get By Id
	public Activity getActivityById(String id) {
		Optional<Activity> optional = activityRepository.findById(id);
		return optional.orElse(null);
	}

	// Update
	public Activity updateActivity(String id, Activity activity) {
		Optional<Activity> optional = activityRepository.findById(id);

		if (optional.isPresent()) {
			
			Optional<Users> byName = userRepository.findByEmail(activity.getAuthor());
			activity.setAuthor(byName.get().getId());
			
			Activity existing = optional.get();
			existing.setTitle(activity.getTitle());
			existing.setContent(activity.getContent());
			existing.setStatus(activity.getStatus());
			existing.setPriority(activity.getPriority());

			return activityRepository.save(existing);
		}

		return null;
	}

	// Delete
	public void deleteActivity(String id) {
		activityRepository.deleteById(id);
	}
}