import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertStudentComponent } from './components/crud/insert-student/insert-student.component';
import { StudentListComponent } from './components/crud/student-list/student-list.component';
import { StudentRoutingComponent } from './student.component';

const ROUTES: Routes = [
  {
    path: '',
    component: StudentRoutingComponent,
    children: [
      {
        path: 'insert-student',
        component: InsertStudentComponent,
      },
      {
        path: 'student-list',
        component: StudentListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
