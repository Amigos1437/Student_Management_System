package com.amigos.exception;

public class StudentExistsException extends RuntimeException{

		private String message;

		public StudentExistsException() {
			super();
		}

		public StudentExistsException(String message) {
			super();
			this.message = message;
		}

		public String getMessage() {
			return this.message;
		}

		@Override
		public String toString() {
			return String.format("StudentExistsException [message=%s]", message);
		}
	}

