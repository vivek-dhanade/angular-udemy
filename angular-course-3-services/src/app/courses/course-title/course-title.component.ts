import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-title',
  imports: [],
  templateUrl: './course-title.component.html',
  styleUrl: './course-title.component.css',
  standalone: true
})
export class CourseTitleComponent implements OnInit {

  @Input()
  title: string

  constructor(){

  }

  ngOnInit(){

  }
}
