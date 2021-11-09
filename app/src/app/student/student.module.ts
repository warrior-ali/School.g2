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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';




const Material_Module: any[] = [
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule,
  MatIconModule
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
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class StudentModule {}
