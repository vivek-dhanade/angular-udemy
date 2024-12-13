// the below way is first way to get data step by step
// app.component.ts > app.component.html > course-card.component.ts > course-card.component.html

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //METHOD 1

// import { Component, Input, OnInit } from '@angular/core';

// @Component({
//   selector: 'course-card',
//   imports: [],
//   templateUrl: './course-card.component.html',
//   styleUrl: './course-card.component.css'
// })
// export class CourseCardComponent implements OnInit{

//   // getting input from where it is called (here, "app.component.html" calls this component)
//   @Input()

//   // this is input
//   title:string;

//   ngOnInit(): void {
    
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// METHOD 2 
// getting data in data model format

import { Component, Input, OnInit, Output } from '@angular/core';

// Create a data model and import the model
import { Course } from '../model/course';
import { EventEmitter } from  '@angular/core';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit{

  // getting input data of type "Course" model
  @Input({
    required: true
  })
  course:Course; 

  @Input({required:true})
  index: number;
  
  ngOnInit(): void {}

  // // Event Function
  // onCourseViewed(){
  //   console.log("card component -- button clicked.")
  // }


  //Custom event and output

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  
  onCourseViewed(){
    console.log("card component -- button clicked.");

    this.courseEmitter.emit(this.course);
  }
  
  cardClasses()
  {
    if(this.course.category === 'BEGINNER')
    {
      return ['beginner'];
    }
  }

  cardStyles()
  {
    return {
      'text-decoration':'underline',
      // 'background': 'url(' + this.course.iconUrl +')'      
    };
  }
}