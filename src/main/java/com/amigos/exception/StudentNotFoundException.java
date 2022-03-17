package com.amigos.exception;

public class StudentNotFoundException extends RuntimeException{
	
		private String message;

		public StudentNotFoundException() {
			super();
		}

		public StudentNotFoundException(String message) {
			super();
			this.message = message;
		}

		public String getMessage() {
			return this.message;
		}

		@Override
		public String toString() {
			return String.format("StudentNotFoundException [message=%s]", message);
		}
		
		


	}

	


