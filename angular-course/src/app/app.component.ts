import { Component, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule} from '@angular/common'

// importing data from "db-data.ts"
import {COURSES} from '../db-data';

import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit{

    // passing data received from "db-data.ts" to app.component.html
    // coreCourse = COURSES[0];
    // rxjsCourse = COURSES[1];
    // ngrxCourse = COURSES[2];
    //OR
    courses = COURSES;
    // courses=[];

    // title = this.courses[0].description;
    price = 9.996;

    rate=0.67;

    course= COURSES[0];

    startDate = new Date(2000, 0 ,1);

    imageUrl="https://picsum.photos/300";

    @ViewChild(CourseCardComponent)
    card:CourseCardComponent;

    @ViewChild('cardRef2')
    card2:CourseCardComponent;

    @ViewChild('container')
    container:ElementRef;

    @ViewChild('cardRef3', {read:ElementRef})
    card3:ElementRef;

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards: QueryList<ElementRef>;

    onCourseSelected(course:Course)
    {
        // console.log("Course Selected is ", course);
        console.log("Card 1 here:",this.card);
        console.log("Card 2 here:",this.card2);
        console.log("Container:",this.container);
        console.log("Element card3:", this.card3);
    }

    trackCourse(index:number, course:Course)
    {
        return course.id;
    }

    ngAfterViewInit(){
        // console.log("Card 2 here:",this.card2);

        console.log("1st Card in Cards QueryList : ", this.cards.first);
        console.log("Last Card in Cards QueryList : ", this.cards.last);
        console.log("Cards: ", this.cards);

        this.cards.changes.subscribe(
            cards => console.log(cards)
        );
    }

    onCourseEdit(){
        this.courses.push(
            {
                id: 8,
                description: "Angular core deep dive",
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
                longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
                category: 'INTERMEDIATE',
                lessonsCount: 10
            }
        );
    }
}
