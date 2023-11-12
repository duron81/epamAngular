import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { Store } from '@ngrx/store';

import { HttpCourse } from 'src/app/shared/interfaces/http-course.interface';
import { CourseService } from 'src/app/shared/services/course.service';
import * as CoursesActions from '../courses_store/course.actions'
import * as fromApp from '../../store/app.reducer'

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
  subscriptionForCourseService?: Subscription;

  constructor(
    private courseService: CourseService, 
    private store: Store<fromApp.AppState>,
  ) {
    
  }
  
  ngOnInit() {
    this.store.dispatch(CoursesActions.FetchCourses());

    this.store.select('courses')
      .pipe(
        map(response => response.courses)
      )
      .subscribe(response => {
        this.listOfCourses = response;
      })
  }

  onClickLoadMore(): void {
    this.store.dispatch(CoursesActions.LoadMoreCourses());
    this.store.dispatch(CoursesActions.FetchCourses());
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
      this.store.dispatch(CoursesActions.DeleteCourse({id: this.courseForDelete.id}));
    }
    this.titleForDelete = '';
    this.showModal = false;
    // this.store.dispatch(CoursesActions.FetchCourses());
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

    if (this.subscriptionForCourseService) {
      this.subscriptionForCourseService.unsubscribe();
    }
  }
}
