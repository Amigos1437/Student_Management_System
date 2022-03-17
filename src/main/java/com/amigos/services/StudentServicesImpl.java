package com.amigos.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amigos.exception.StudentNotFoundException;
import com.amigos.exception.StudentExistsException;
import com.amigos.model.Student;
import com.amigos.repository.StudentRepository;

@Service
public class StudentServicesImpl implements StudentServices
{
	@Autowired
	private StudentRepository repository;
	
	public Student find(int id)
	{
		Optional<Student> o=repository.findById(id);
		
		if(o.isPresent()) 
        {			
			return o.get();
        }
		return null;
	}
	
	public List<Student> findAll()
	{
		return repository.findAll();
	}
	
	public void save(Student student)
	{
		repository.save(student);
	}
	
	public void delete(int id)
	{
        Optional<Student> o = repository.findById(id);
        
        if(o.isPresent()) 
        {
            repository.deleteById(id);
        }
        else
        {
        	throw new StudentNotFoundException("StudentId: "+id);
        }

	}

	public void update(Student student)
	{
		//System.out.println("In service, from browser: "+student);		
        Optional<Student> o = repository.findById(student.getId());
        //System.out.println("In service, from db: "+o.get());      
        
        if(o.isPresent()) 
        {
            repository.save(student);
        }
        else
        {
        	throw new StudentNotFoundException("StudentId: "+student.getId());
        }
 	}

}
