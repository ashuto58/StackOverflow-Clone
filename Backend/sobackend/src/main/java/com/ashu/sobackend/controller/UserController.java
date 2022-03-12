package com.ashu.sobackend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ashu.sobackend.models.User;
import com.ashu.sobackend.service.UserService;





@RestController
public class UserController {
	
	@Autowired
    private UserService userService;
	
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/users/signup")
    public User registerUser(@RequestBody User user) {
		return userService.saveUser(user);
	};

}
