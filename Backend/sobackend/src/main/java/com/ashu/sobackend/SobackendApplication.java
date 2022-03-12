package com.ashu.sobackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class SobackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SobackendApplication.class, args);
	}

}
