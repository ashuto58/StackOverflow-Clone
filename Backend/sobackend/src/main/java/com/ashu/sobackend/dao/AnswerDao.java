package com.ashu.sobackend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ashu.sobackend.models.Answer;




public interface AnswerDao extends JpaRepository<Answer, Long> {
	
	@Query("select a From Answer a WHERE a.ques_id=?1")
	public List<Answer> getAnswerByQuesId(long ques_id);

}