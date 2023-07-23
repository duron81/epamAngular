import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { debounceTime } from 'rxjs';

import { HttpCourse } from 'src/app/shared/interfaces/http-course.interface';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnChanges {

  @Input() searchValue: string = '';
  courseForDelete?: HttpCourse;
  titleForDelete: string = '';
  showModal = false;
  listOfCourses: HttpCourse[] = [];
  inputValue = '';
  debounceTimeValue = 500;

  constructor(private courseService: CourseService ) {
    
  }
  
  ngOnInit() {
    this.courseService.loadingSubject.next(true);
    this.courseService.onFetchCourses()
    .subscribe(
      courses => {
        this.listOfCourses = [...courses];
      }
    )
    this.courseService.loadingSubject.next(false);
  }
    
  ngOnChanges() {
    this.courseService.inputSubject
    .pipe(debounceTime(this.debounceTimeValue))
    .subscribe(value => {
      this.inputValue = value;
      if (this.inputValue.length >= 3) {
        this.courseService.loadingSubject.next(true);
        this.courseService.onFetchCoursesWithFilter(this.inputValue).subscribe(
          courses => {
            this.listOfCourses = [...courses];
          }
        )
        this.courseService.loadingSubject.next(false);
      } else {
        this.courseService.loadingSubject.next(true);
        this.courseService.onFetchCourses().subscribe(
          courses => {
            this.listOfCourses = [...courses];
          }
        )
        this.courseService.loadingSubject.next(false);
      }
    })
  }

  onClickLoadMore(): void {
    this.courseService.onLoadAdditionalCourses();
    this.courseService.onFetchCourses().subscribe(
      course => {
        this.listOfCourses = [...course];
      }
    )
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
    this.courseService.loadingSubject.next(true);
    if (this.courseForDelete) {
      this.courseService.removeCourse(this.courseForDelete.id);
    }
    this.titleForDelete = '';
    this.showModal = false;
    this.courseService.onFetchCourses().subscribe(
      courses => {
        this.listOfCourses = [...courses];
      }
    )
    this.courseService.loadingSubject.next(false);
  }

  onCancelModal(): void {
    this.titleForDelete = '';
    this.showModal = false;
  }

}
