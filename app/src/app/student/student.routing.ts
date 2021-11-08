import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertStudentComponent } from './components/crud/insert-student/insert-student.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
