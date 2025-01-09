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
    Attribute
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
export class CourseCardComponent implements OnInit {

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
    }

    ngOnInit() {
        console.log(this.coursesService , "");
    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }


    onTitleChanged(newTitle: string){
        this.course.description = newTitle;
    }

}
