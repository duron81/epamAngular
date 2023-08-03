import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription, debounceTime, filter } from 'rxjs';

import { HttpCourse } from 'src/app/shared/interfaces/http-course.interface';
import { CourseService } from 'src/app/shared/services/course.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnDestroy {

  @Input() searchValue: string = '';
  courseForDelete?: HttpCourse;
  titleForDelete: string = '';
  showModal = false;
  listOfCourses: HttpCourse[] = [];
  inputValue = '';
  debounceTimeValue = 500;
  subscriptionForInput?: Subscription;
  subscriptionForCourses?: Subscription;

  constructor(private courseService: CourseService, private loadingService: LoadingService ) {
    
  }
  
  ngOnInit() {
    this.courseService.onFetchCourses();

    this.subscriptionForCourses = this.courseService.coursesSubject.
      subscribe(response => {
        this.listOfCourses = response;
    })

    this.subscriptionForInput = this.courseService.inputSubject
    .pipe(debounceTime(this.debounceTimeValue))
    .pipe(filter(input => input.length >= 3))
    .subscribe(value => {
        this.courseService.onFetchCoursesWithFilter(value).subscribe(
          courses => {
            this.listOfCourses = [...courses];
          }
        )
    })
  }

  onClickLoadMore(): void {
    this.courseService.onLoadAdditionalCourses();
  }
  
  onDeleteCourse(id: number): void {
    this.courseService.getCourseById(id).subscribe(
      response => {
        this.courseForDelete = response;
        this.titleForDelete = this.courseForDelete.name;
      }
    );  
    this.showModal = true;
  }
  
  
  onCloseModal(): void {
    if (this.courseForDelete) {
      this.courseService.removeCourse(this.courseForDelete.id);
    }
    this.titleForDelete = '';
    this.showModal = false;
    this.courseService.onFetchCourses();
  }

  onCancelModal(): void {
    this.titleForDelete = '';
    this.showModal = false;
  }
  
  ngOnDestroy(): void {
    if (this.subscriptionForInput) {
      this.subscriptionForInput.unsubscribe();
    }

    if (this.subscriptionForCourses) {
      this.subscriptionForCourses.unsubscribe();
    }
  }
}
