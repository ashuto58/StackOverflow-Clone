package com.ashu.sobackend.service;


import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ashu.sobackend.dao.QuestionDao;
import com.ashu.sobackend.models.Question;



@Service
public class QuestionServiceimpl implements QuestionService {
	
	@Autowired
	private QuestionDao questionDao;
	

	public QuestionServiceimpl() {

	}

	@Override
	public List<Question> getQuestions() {
		// TODO Auto-generated method stub
		return questionDao.findAll();
	}

//	@SuppressWarnings("deprecation")
	@Override
	public Question getQuestion(long questionId) {
		
		return questionDao.findById(questionId).get();
	}

	@Override
	public Question addQuestion(Question question) {
		
		questionDao.save(question);
		return question;
	}

	@Override
	public Question updateQuestion(Question question) {
		
		questionDao.save(question);
		return question;
	}

	@Override
	public void deleteQuestion(long parseLong) {
//		list = this.list.stream().filter(e->e.getId() != parseLong).collect(Collectors.toList());
		@SuppressWarnings({ "deprecation", "unused" })
		Question entity =  questionDao.getOne(parseLong);
		questionDao.delete(entity);
	}

}
