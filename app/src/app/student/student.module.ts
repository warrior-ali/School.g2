import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertStudentComponent } from './components/crud/insert-student/insert-student.component';
import { StudentListComponent } from './components/crud/student-list/student-list.component';
import { StudentRoutingModule } from './student.routing';
import { StudentRoutingComponent } from './student.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const Material_Module: any[] = [
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [
    StudentRoutingComponent,
    InsertStudentComponent,
    StudentListComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    Material_Module,
    ReactiveFormsModule,
  ],
})
export class StudentModule {}
