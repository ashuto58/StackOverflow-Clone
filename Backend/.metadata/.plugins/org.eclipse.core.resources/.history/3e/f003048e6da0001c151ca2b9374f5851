package com.ashu.sobackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ashu.sobackend.models.User;
import com.ashu.sobackend.repositories.UserRepository;

@Service
public class UserService {
	
	
	@Autowired
    public  UserRepository userRepo;

    public UserService (UserRepository userRepo) {this.userRepo = userRepo; }
    
    public User saveUser(User user) {
    	User username = userRepo.findByUsername(user.getUsername());
    	if(username != null) throw new Error("user already exists");
    	else {
    		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    		String encodedPass = passwordEncoder.encode(user.getPassword());
    		user.setPassword(encodedPass);
    		return userRepo.save(user);
    	}
    };

}
