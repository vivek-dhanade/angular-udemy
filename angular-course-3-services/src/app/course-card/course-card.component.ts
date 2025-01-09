import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation,
    Inject,
    ChangeDetectionStrategy,
    Attribute,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked,
    DoCheck
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: false,
    // changeDetection: ChangeDetectionStrategy.OnPush  // detects changes only for input values as a whole, otherwise skipped. used for faster application
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, DoCheck {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor( private coursesService: CoursesService,
        @Attribute('type') private type: string
    ) {
        // console.log("Type:", type);
        console.log("constructor",this.course);
    }

    ngOnInit() {
        console.log("ngOnInit");
        console.log(this.coursesService , "");
    }

    ngOnChanges(changes) {
        console.log("ngOnChanges", changes);
      }

    ngOnDestroy(){
        console.log("ngOnDestroy");
    }

    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
        this.course.description="ngAfterContentChecked";
        this.course.category = "ADVANCED";
        // this.course.iconUrl = "";  // line will give error in console (cant edit elements which are part of content)
    }

    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
        // this.course.description = "ngAfterViewChecked"; // line will give error in console (content changed after viewing changes)
    }

    ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
    }

    ngAfterViewInit(){
        console.log("ngAfterViewInit");
    }

    ngDoCheck(): void {
        console.log("ngDoCheck");
    }

    onSaveClicked(description:string) {
        this.courseEmitter.emit({...this.course, description});
    }


    onTitleChanged(newTitle: string){
        this.course.description = newTitle;
    }

}
