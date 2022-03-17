import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-mod',
  templateUrl: './student-mod.component.html',
  styleUrls: ['./student-mod.component.css']
})
export class StudentModComponent implements OnInit 
{
  isConfirmed: boolean=false;
  msg: string="";
  student!: Student;
  sDate: string="";
  date!: Date;
  public myForm!: FormGroup;

  constructor(private studentService: StudentService, private route: ActivatedRoute) 
  { 
    this.student=new Student(0, '', new Date(), 0, 0, 0);
    this.createForm();
  }

  ngOnInit(): void 
  {
    console.log("In ngOnInit()")
    this.route.params.subscribe((parameters)=>
    {
        this.studentService.getStudent(parseInt(parameters['studentId'])).subscribe((x)=>
        {
          this.student=x? x: null;
          let tmpDate=this.student.dateOfAdmission;
          this.date=this.jsonToDate(new Date(this.student.dateOfAdmission));
        });
    });
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

  mySubmit(): void
  {
    this.msg=`Name ${this.student.studentName} 
              Date of admission ${this.student.dateOfAdmission}
              Physics ${this.student.physics} 
              Chemistry ${this.student.chemistry}
              Biology ${this.student.biology}`;
    this.studentService.modStudent(this.student).subscribe((x)=>{console.log(x)});
  }

  myReset()
  {
    this.toggleConfirmed()
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
  jsonToDate(date: Date): Date 
  {
    date.setDate(date.getDate());
    return date;
  }
}
