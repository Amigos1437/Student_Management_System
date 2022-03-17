import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students : Student[]=[];
  constructor(private StudentService: StudentService, private route: ActivatedRoute) 
  { 

  }

  ngOnInit(): void 
  {
    this.StudentService.getStudents().subscribe((x)=>{ this.students=x });
    //this.StudentService.getStudent(100).subscribe((x)=>{this.Students.push(x)});
  }

  delStudent(event: any, index: any) 
  {  
    let id=this.students[index].studentId;
    
    this.StudentService.delStudent(id)  
      .subscribe((data: any) => 
      {  
        console.log(data);  
        this.ngOnInit();
      });

    //this.StudentService.getStudents().subscribe(x =>{ this.Students=x },   
    //  (error: any) => { return console.log(error); });
  }
}
