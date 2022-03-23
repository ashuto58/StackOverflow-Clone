package com.ashu.sobackend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Answer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String ans;
	private long ques_id;
	private String username;
	public Answer(long id, String ans, long ques_id, String username) {
		super();
		this.id = id;
		this.ans = ans;
		this.ques_id = ques_id;
		this.username = username;
	}
	public Answer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getAns() {
		return ans;
	}
	public void setAns(String ans) {
		this.ans = ans;
	}
	public long getQues_id() {
		return ques_id;
	}
	public void setQues_id(long ques_id) {
		this.ques_id = ques_id;
	}
	@Override
	public String toString() {
		return "Answer [id=" + id + ", ans=" + ans + ", ques_id=" + ques_id + ", username=" + username + "]";
	}

}

