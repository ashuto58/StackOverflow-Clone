package com.ashu.sobackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ashu.sobackend.models.Answer;
import com.ashu.sobackend.service.AnswerService;








@RestController
public class AnswerController {
	
	@Autowired
	private AnswerService answerSerivice;
	
	@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600)
	@PostMapping("/answers")
	public Answer addAnswer(@RequestBody Answer answer) {
		
		return this.answerSerivice.addAnswer(answer);
	}
	
	@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600)
	@GetMapping("/questions/answers/{ques_id}")
	public List<Answer> getAnsOfQues(@PathVariable String ques_id) {
		return this.answerSerivice.getAnsOfQues(Long.parseLong(ques_id));
	}

}
