import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../model/course';


let counter = 0;

@Injectable({
  providedIn: 'root',
  // useFactory: (http) => new CoursesService(http),
  // deps: [
  //   HttpClient
  // ]
  useClass: CoursesService
})

export class CoursesService {

  constructor(private http: HttpClient) {
    counter++;
    console.log("creating courses Service"+counter);
  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10");

    return this.http.get<Course[]>('api/courses', { params })
  }

  saveCourse(course: Course) {
    const headers = new HttpHeaders()
      .set("X-Auth","userId");
    return this.http.put(`/api/courses/${course.id}`,course, {headers});
  }
}
