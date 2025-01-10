import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { CoursesService } from './services/courses.service';
import { FilterByCategoryPipe } from './filter-by-category.pipe';



@NgModule({
  providers:[
    CoursesService
  ],
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    FilterByCategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CourseCardComponent,
    CourseImageComponent,
    FilterByCategoryPipe
  ]
})
export class CoursesModule { }
