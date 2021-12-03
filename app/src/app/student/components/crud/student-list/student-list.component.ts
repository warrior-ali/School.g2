import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student/shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  editUsr: any;
  oldUsr: any;
  editdisabled: boolean;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'dateOfBirth',
    'classID',
    'phoneNumber',
    'action',
  ];

  constructor(public st: StudentService) {}

  ngOnInit(): void {
    this.st.StudentList();
    this.st.getClasses();
  }

  editROw(st: any) {
    this.editdisabled = false;
    this.editUsr = st && st.sid ? st : {};
    this.oldUsr = { ...this.editUsr };
  }

  updateEdit(student) {
    this.editdisabled = true;
    this.editUsr = null;
    let data = {
      sid: student.sid,
      firstName: student.first_name,
      lastName: student.last_name,
      dateOfBirth: student.date_of_birth,
      phoneNumber: student.phone_number,
      classID: student.classcid,
    };

    this.st.updateStudent(data).subscribe((res) => {
      if (res.Success) {
        this.st.StudentList();
      }
    });
  }
  cancelEdit() {
    this.editUsr = null;
    this.st.StudentList();
  }

  onDelete(item) {
    this.st.deleteStudent(item.sid).subscribe((res) => {
      if (res.Success) {
        this.st.StudentList();
      }
    });
  }
}
