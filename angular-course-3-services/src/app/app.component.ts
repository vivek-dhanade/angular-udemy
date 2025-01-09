import {AfterViewInit, Component, ElementRef, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren, NgModule,Inject, ChangeDetectionStrategy, Attribute, ChangeDetectorRef, DoCheck, OnChanges, SimpleChanges} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
// import {CourseCardComponent} from './course-card/course-card.component';
// import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './courses/services/courses.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';

// function coursesServiceProvider(http: HttpClient): CoursesService{
//   return new CoursesService(http);
// }

// const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    // providers:[
    //   {
    //     provide: COURSES_SERVICE,
    //     useFactory : coursesServiceProvider,
    //     deps: [HttpClient]
    //   }
    // ]
    // providers:[
    //   // {
    //   //   provide: CoursesService,
    //   //   useClass: CoursesService
    //   // }
    //   CoursesService
    // ] 

    // providers:[
    //   {
    //     provide: CONFIG_TOKEN,
    //     // useFactory: () => APP_CONFIG
    //     useValue: APP_CONFIG
    //   }
    // ]

    // changeDetection: ChangeDetectionStrategy.OnPush
})
// export class AppComponent implements OnInit, DoCheck {
export class AppComponent implements OnInit {

  courses = COURSES;
 
  // courses;

  // courses$ : Observable<Course[]>;

  // courses: Course[];

  // constructor(private http: HttpClient, private coursesService: CoursesService) {
  // }

  // constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {
  // }
  constructor( private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN)private config: AppConfig,
    private cd: ChangeDetectorRef    
  ){

    // console.log(config);

  }

  // ngDoCheck(){
  //   // console.log("NgDoCheck");
  //   // this.cd.markForCheck();
  // }

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

    // this.courses$ = this.coursesService.loadCourses();

    this.coursesService.loadCourses()
    .subscribe(courses =>{ 
      this.courses = courses;
      // this.cd.markForCheck();
    });

  }

  save(course:Course){
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log("Course Saved Successfully")
      );
  }

  // onEditCourse(){
  //   this.courses[0].description = "New Value"
  // }

  onEditCourse(){
    // const newCourse:any = {...this.courses[0]} 
    //OR
    const course= this.courses[0];
    const newCourse:any = {...course};

    newCourse.description = "New Course!";
    this.courses[0] = newCourse;

    // const course= this.courses$[0];
    // const newCourse:any = {...course};
    // newCourse.description = "New Course!";
    // this.courses$[0] = newCourse;
  }

  deleteCourses(){
    this.courses=[undefined];
  }
}
