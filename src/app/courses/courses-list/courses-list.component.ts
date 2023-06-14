import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { Course } from 'src/app/shared/interfaces/course.interface.';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  constructor(private coursesService: CourseService, private cdr: ChangeDetectorRef) {}

  @Input() searchValue: string = '';

  courses: Course[] = [];


  ngOnInit() {
      this.courses = this.coursesService.getListCourses();
  }

  trackByFn(index: number, item: Course): number {
    return item.id; // Assuming each item has a unique "id" property
  }

  filterItems(courses: Course[], searchtext: string): Course[] {
    let filterPipe = new FilterPipe();
    return filterPipe.transform(courses, searchtext);
  }

  onClickLoadMore(): void {
    console.log('clicked');
  }

  onDeleteCourse(id: number) {
    this.coursesService.removeCourse(id);
    this.courses = this.coursesService.getListCourses();
  }
}
