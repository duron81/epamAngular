import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Course } from 'src/app/shared/interfaces/course.interface.';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  constructor(private coursesService: CourseService) {}

  @Input() searchValue: string = '';

  courses: Course[] = [];
  courseForDelete?: Course;
  titleForDelete = "";
  showModal = false;


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

  onDeleteCourse(id: number): void {
    this.courseForDelete = this.coursesService.getCourseById(id);
    if (this.courseForDelete) {
      this.titleForDelete = this.courseForDelete.title;
    }
    this.showModal = true;
  }


  onCloseModal(): void {
    console.log(this.courseForDelete);
    if (this.courseForDelete) {
      this.coursesService.removeCourse(this.courseForDelete.id);
      this.courses = this.coursesService.getListCourses();
    }
    this.showModal = false;
  }

  onCancelModal(): void {
    this.showModal = false;
  }
}
