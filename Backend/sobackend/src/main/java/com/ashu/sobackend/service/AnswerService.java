package com.ashu.sobackend.service;

import java.util.List;

import com.ashu.sobackend.models.Answer;


public interface AnswerService {
	
	public Answer addAnswer(Answer answer);
	public List<Answer> getAnsOfQues(long ques_id);

}
