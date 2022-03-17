package com.amigos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amigos.model.Student;
import com.amigos.services.StudentServices;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
  
@RequestMapping("/student")
public class StudentController 
{
	@Autowired
	private StudentServices service;
	
	@PostMapping("/insert")
	public HttpStatus insert(@RequestBody Student student)
	{
		try
		{
			service.save(student);
			return HttpStatus.CREATED;
		}
		catch(Exception e)
		{
			return HttpStatus.FOUND;
		}
	}

	@PutMapping("/update")
	public HttpStatus update(@RequestBody Student student)
	{
		//System.out.println(student);		
		try
		{
			service.update(student);
			return HttpStatus.OK;
		}
		catch(Exception e)
		{
			return HttpStatus.NOT_FOUND;
		}
	}

	@GetMapping("/findAll")
	public List<Student> findAll()
	{
		return service.findAll();
	}

	@GetMapping("/find/{id}")
	public Object find(@PathVariable int id)
	{
		try
		{
			Student student=service.find(id);
			return student;
		}
		catch(Exception e)
		{
			return HttpStatus.NOT_FOUND;
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public HttpStatus delete(@PathVariable int id)
	{
		try
		{
			service.delete(id);
			return HttpStatus.OK;
		}
		catch(Exception e)
		{
			return HttpStatus.NOT_FOUND;
		}
	}

}
