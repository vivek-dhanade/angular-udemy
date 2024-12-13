import { Component } from '@angular/core';

// importing data from "db-data.ts"
import {COURSES} from '../db-data';

import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

    // passing data received from "db-data.ts" to app.component.html
    // coreCourse = COURSES[0];
    // rxjsCourse = COURSES[1];
    // ngrxCourse = COURSES[2];
    //OR
    courses = COURSES;
    // courses=[];

    onCourseSelected(course:Course)
    {
        console.log("Course Selected is ", course);
    }

    trackCourse(index:number, course:Course)
    {
        return course.id;
    }
}
