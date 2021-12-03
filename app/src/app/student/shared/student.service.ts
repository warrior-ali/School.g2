import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiRequest, GlobalService } from 'src/app/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private _gradeLevelList$ = new BehaviorSubject<any>([]);
  private _classesList$ = new BehaviorSubject<any>([]);
  private _studentList$ = new BehaviorSubject<any>([]);

  constructor(private gs: GlobalService) {}

  public get getClassesList(): Observable<any> {
    return this._classesList$.asObservable();
  }
  public get getGradeLevelList(): Observable<any> {
    return this._gradeLevelList$.asObservable();
  }

  public get getStudentList(): Observable<any> {
    return this._studentList$.asObservable();
  }

  getGradelevel() {
    ApiRequest('GET')
      .Controller('requirement')
      .Action('grade-level')
      .call(this.gs)
      .subscribe((res) => {
        this._gradeLevelList$.next(res);
      });
  }
  getClasses() {
    ApiRequest('GET')
      .Controller('requirement')
      .Action('classes')
      .call(this.gs)
      .subscribe((res) => {
        this._classesList$.next(res);
      });
  }

  StudentList() {
    ApiRequest('GET')
      .Controller('student')
      .call(this.gs)
      .subscribe((res) => {
        this._studentList$.next(res);
      });
  }

  student_insert(model: any) {
    return ApiRequest('POST').Controller('student').Body(model).call(this.gs);
  }

  deleteStudent(studentId) {
    return ApiRequest('DELETE')
      .Controller('student')
      .Action(studentId)
      .call(this.gs);
  }

  updateStudent(model: any) {
    return ApiRequest('PUT').Controller('student').Body(model).call(this.gs);
  }
}
