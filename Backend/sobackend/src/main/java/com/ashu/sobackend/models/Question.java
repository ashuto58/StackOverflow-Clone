package com.springrest.springrest.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Question {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String title;
	private String body;
	private String username;
	public Question(long id, String title, String body, String username) {
		super();
		this.id = id;
		this.title = title;
		this.body = body;
		this.username = username;
	}
	public Question() {
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
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getbody() {
		return body;
	}
	public void setbody(String body) {
		this.body = body;
	}
	@Override
	public String toString() {
		return "Question [id=" + id + ", title=" + title + ", body=" + body + ", username=" + username + "]";
	}
	
	
	
	

}

