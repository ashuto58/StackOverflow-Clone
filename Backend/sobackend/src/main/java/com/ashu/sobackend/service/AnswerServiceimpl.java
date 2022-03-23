package com.ashu.sobackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ashu.sobackend.dao.AnswerDao;
import com.ashu.sobackend.models.Answer;



@Service
public class AnswerServiceimpl implements AnswerService {
	
	@Autowired
	private AnswerDao answerDao;
	

	public AnswerServiceimpl() {

	}

	



	@Override
	public Answer addAnswer(Answer answer) {
		
		answerDao.save(answer);
		return answer;
	}





	@Override
	public List<Answer> getAnsOfQues(long ques_id) {
		
		return answerDao.getAnswerByQuesId(ques_id);
	
	}

	

	

}

