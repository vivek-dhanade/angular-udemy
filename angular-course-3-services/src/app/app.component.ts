import {AfterViewInit, Component, ElementRef, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren, Inject} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';

function coursesServiceProvider(http: HttpClient): CoursesService{
  return new CoursesService(http);
}

const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    providers:[
      {
        provide: COURSES_SERVICE,
        useFactory : coursesServiceProvider,
        deps: [HttpClient]
      }
    ]
})
export class AppComponent implements OnInit {

  courses$ : Observable<Course[]>;

  // courses;

  // constructor(private http: HttpClient, private coursesService: CoursesService) {
  // }

  constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {
  }

  ngOnInit() {

    // console.log(this.coursesService);

    // const params = new HttpParams()
    //   .set("page","1")
    //   .set("pageSize","10");

    // this.http.get('/api/courses', {params})
    //   .subscribe(
    //     courses => this.courses = courses
    //   );



    // const params = new HttpParams()
    //   .set("page","1")
    //   .set("pageSize","10");
    // this.courses$ =  this.http.get<Course[]>('/api/courses', {params});

    this.courses$ = this.coursesService.loadCourses();

  }

  save(course:Course){
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log("Course Saved Successfully")
      );
  }

}
