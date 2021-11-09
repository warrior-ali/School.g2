import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Name: string;
  Status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Name: 'ali', Status: 'good' },
  { Name: 'alireza', Status: 'very good' },
  { Name: 'homan', Status: 'bad' },
  { Name: 'asghar', Status: 'terrible' },
];
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  editUsr: any;
  oldUsr: any;
  editdisabled: boolean;
  displayedColumns: string[] = ['Name', 'Status', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}

  editROw(usr: any) {
    this.editdisabled = false;
    this.editUsr = usr && usr.Name ? usr : {};
    this.oldUsr = { ...this.editUsr };
  }

  updateEdit() {
    this.editdisabled = true;
    this.editUsr = null;
  }
  cancelEdit() {
    this.editUsr = null;
  }
}
