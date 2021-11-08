import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.scss']
})
export class InsertStudentComponent implements OnInit {

  @Output() changeTab = new EventEmitter<number>();

  form = this.fb.group({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  });
  constructor(
    private readonly fb: FormBuilder,
    // private readonly authService: AuthService,
    // private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onRegister() {
    // this.authService
    //   .register(this.form.value)
    //   .subscribe((res: ApiResponse<[]>) => {
    //     if (res.Success) {
    //       this.snackBar.open('Register Successfully ... !', 'x', {
    //         duration: 1500,
    //       });
    //       this.changeTab.emit(0);
    //     } else
    //       this.snackBar.open('Somthing is wrong. Please try again ... !', 'x', {
    //         duration: 1500,
    //       });
    //   });
  }

}
