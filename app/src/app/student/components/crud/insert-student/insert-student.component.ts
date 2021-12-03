import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../../shared/student.service';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.scss'],
})
export class InsertStudentComponent implements OnInit {
  @Output() changeTab = new EventEmitter<number>();

  form = this.fb.group({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    classID: '',
  });

  constructor(
    private readonly fb: FormBuilder,
    public st: StudentService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.st.getGradelevel();
  }

  onInsert() {
    this.st.student_insert(this.form.value).subscribe((res) => {
      if (res.Success) {
        this.router.navigate(['/student/student-list']);
      }
    });
  }
}
