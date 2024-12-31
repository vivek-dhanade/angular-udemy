import {Component, Input, OnInit} from '@angular/core';
import {COURSES} from '../../db-data';
import {Course} from '../model/course';


@Component({
    selector: 'course-image',
    templateUrl: './course-image.component.html',
    styleUrls: ['./course-image.component.css'],
    standalone: false
})
export class CourseImageComponent implements OnInit {

  @Input('src')
  imageUrl:string;



  constructor() { }

  ngOnInit() {
  }

}
