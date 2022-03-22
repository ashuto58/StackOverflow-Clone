package com.ashu.sobackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ashu.sobackend.models.Question;
import com.ashu.sobackend.service.QuestionService;


@RestController
public class QuestionController {
	
	@Autowired
	private QuestionService questionSerivice;
	
	@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600)
	@GetMapping("/questions")
	public List<Question> getQuestions(){
		
		return this.questionSerivice.getQuestions();
		
	}
	
	
	@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600)
	@GetMapping("/questions/{questionId}")
	public Question getQuestion(@PathVariable String questionId) {
		return this.questionSerivice.getQuestion(Long.parseLong(questionId));
	}
	
	@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600)
	@PostMapping("/questions")
	public Question addQuestion(@RequestBody Question question) {
		
		return this.questionSerivice.addQuestion(question);
	}
	
	
	@PutMapping("/questions")
	public Question updateQuestion(@RequestBody Question question) {
		
		return this.questionSerivice.updateQuestion(question);
	}
	
	@DeleteMapping("/questions/{questionId}")
	public ResponseEntity<HttpStatus> deleteQuestion(@PathVariable String questionId){
		try {
			this.questionSerivice.deleteQuestion(Long.parseLong(questionId));
			return new ResponseEntity<> (HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
}

