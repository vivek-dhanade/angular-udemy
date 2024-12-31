import { Component, OnInit, Input, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'course-image',
  imports: [],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent implements OnInit{

  @Input('src')
  imageUrl: string;

  ngOnInit(): void {
    
  }

  getImageUrl()
  {
    return this.imageUrl;
  }
}
