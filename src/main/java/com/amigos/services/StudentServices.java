package com.amigos.services;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.amigos.model.Student;

@Service
public interface StudentServices {

		public Student find(int id);
		
		public List<Student> findAll();
		
		public void save(Student student);
		
		public void delete(int id);
		
		public void update(Student student);
	
}
