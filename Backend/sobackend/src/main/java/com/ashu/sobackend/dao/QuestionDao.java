package com.ashu.sobackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ashu.sobackend.models.Question;


public interface QuestionDao extends JpaRepository<Question, Long> {

}