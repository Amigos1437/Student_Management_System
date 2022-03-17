import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentModComponent } from './student-mod/student-mod.component'

const routes: Routes = [
  {
    path: '', pathMatch:"full", redirectTo:"student/home",
  },
  { 
    path: 'student/home',
    component: HomeComponent
  },
  { 
    path: 'student/insert',
    component: StudentAddComponent
  },
  {
    path: "student/list",
    component: StudentListComponent
  },
  {
    path: "student/delete/:id", 
    component: StudentListComponent
  },
  {
    path: "student/update/:stockId",
    component: StudentModComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
