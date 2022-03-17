package com.ashu.sobackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.ashu.sobackend.models.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
	 User findByUsername(String username);
	
}

