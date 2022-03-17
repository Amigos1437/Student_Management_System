import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})

export class StudentAddComponent implements OnInit 
{
  isConfirmed: boolean=false;
  msg: string="";
  student!: Student;
  mName: string="";
  
  public myForm!: FormGroup;
  constructor(private studentService : StudentService) { 
    this.student=new Student(0, "", new Date(0), 0, 0, 0);
    this.createForm();
  }


  ngOnInit(): void {
  }

  createForm()
  {
    this.myForm=new FormGroup({
      name: new FormControl(null, [Validators.required]),
      doa: new FormControl(new Date(0), [Validators.required]),
      physics: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
      chemistry: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
      biology: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)])
      
    });
  }

  mySubmit()
  {
    this.msg=`Name ${this.student.studentName} 
              Date of admission ${this.student.dateOfAdmission}
              Physics ${this.student.physics} 
              Chemistry ${this.student.chemistry}
              Biology ${this.student.biology}`;
    this.studentService.addStudent(this.student).subscribe((x)=>{console.log(x)});
  }
  toggleConfirmed()
  {
    if(this.myForm.valid)
    {
      this.isConfirmed=!this.isConfirmed;
    }
  }
  
  get name()
  {
    return this.myForm.get('name');
  }
  get doa()
  {
    return this.myForm.get('doa');
  }
  get physics()
  {
    return this.myForm.get('physics');
  }
  get chemistry()
  {
    return this.myForm.get('chemistry');
  }
  get biology()
  {
    return this.myForm.get('biology');
  }
}
