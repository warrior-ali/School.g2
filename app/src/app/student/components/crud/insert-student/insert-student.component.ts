import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface GradeLevel {
  gid: string;
  name: string;
}

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.scss'],
})
export class InsertStudentComponent implements OnInit {
  @Output() changeTab = new EventEmitter<number>();

  form = this.fb.group({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    grade_level: '',
    phone_number: '',
  });

  gradeLevels: GradeLevel[] = [
    { gid: '1', name: 'Freshman' },
    { gid: '2', name: 'Sophomore' },
    { gid: '3', name: 'Junior' },
    { gid: '4', name: 'Senior' },
  ];

  constructor(private readonly fb: FormBuilder) {}
  ngOnInit(): void {}

  onInsert() {}
}
