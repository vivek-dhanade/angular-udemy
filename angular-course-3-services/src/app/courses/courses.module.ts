import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { CoursesService } from './services/courses.service';
import { FilterByCategoryPipe } from './filter-by-category.pipe';
import { CourseTitleComponent } from "./course-title/course-title.component";



@NgModule({
  providers:[
    // CoursesService
  ],
  declarations: [

    // FilterByCategoryPipe
  ],
  imports: [
    CommonModule,
    // CourseTitleComponent,
    // CourseCardComponent,
    // CourseImageComponent,
    // HighlightedDirective,
    // NgxUnlessDirective,
],
  exports:[
    // CourseCardComponent,
    // CourseImageComponent,
    // FilterByCategoryPipe
  ],
  schemas:[
    // CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CoursesModule { }
