package com.amigos.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class StudentExceptionController {

		@ControllerAdvice
		public class ProductExceptionController
		{
			@ExceptionHandler(value=StudentNotFoundException.class)
			public ResponseEntity<Object> exception(StudentNotFoundException e)
			{
				return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
			}

			@ExceptionHandler(value=StudentExistsException.class)
			public ResponseEntity<Object> exception(StudentExistsException e)
			{
				return new ResponseEntity<>(e.getMessage(), HttpStatus.FOUND);
			}
		}
	}


