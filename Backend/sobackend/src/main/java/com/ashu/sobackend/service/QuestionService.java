package com.ashu.sobackend.service;


import java.util.List;

import com.ashu.sobackend.models.Question;



public interface QuestionService {
	
	public List<Question> getQuestions();
	
	public Question getQuestion(long questionId);
	
	public Question addQuestion(Question question);
	
	public Question updateQuestion(Question question);
	
	public void deleteQuestion(long parseLong);
	
}
