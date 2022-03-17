import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class StudentService {
  private baseUrl: string = 'http://localhost:8081/students/';
  private httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', 'localhost:4200'); 
  
  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<any> 
  {
    return this.httpClient.get(`${this.baseUrl}` + 'findAll');
  }

  getStudent(id: number): Observable<any> {
    console.log("getStudent() id is: "+id)
    return this.httpClient.get(`${this.baseUrl}find/${id}`);
  }

  addStudent(student: Student): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + 'insert', student, { headers: this.httpHeaders });
  }

  modStudent(student: Student): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}` + 'update', student, { headers: this.httpHeaders });
  }

  delStudent(id: number): Observable<Object> {
    console.log(id);
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
  }
}
