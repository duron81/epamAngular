import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { HttpCourse } from 'src/app/shared/interfaces/http-course.interface';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnChanges {

  constructor(private coursesService: CourseService) {}
  
  @Input() searchValue: string = '';
  courseForDelete?: HttpCourse;
  titleForDelete: string = '';
  showModal = false;
  listOfCourses: HttpCourse[] = [];
  
  
  ngOnInit() {
    this.coursesService.onFetchCourses().subscribe(
      courses => {
        this.listOfCourses = [...courses];
      }
    )
  }
    
  ngOnChanges() {
    if (this.searchValue) {
      this.coursesService.onFetchCoursesWithFilter(this.searchValue).subscribe(
        courses => {
          this.listOfCourses = [...courses];
        }
      )
    } else {
      this.coursesService.onFetchCourses().subscribe(
        courses => {
          this.listOfCourses = [...courses];
        }
      )
    }
  }

  onClickLoadMore(): void {
    this.coursesService.onLoadAdditionalCourses();
    this.coursesService.onFetchCourses().subscribe(
      course => {
        this.listOfCourses = [...course];
      }
    )
  }

  onDeleteCourse(id: number): void {
    this.coursesService.getCourseById(id).subscribe(
      response => {
        this.courseForDelete = response;
        this.titleForDelete = this.courseForDelete.name;
      }
    );  
    this.showModal = true;
  }


  onCloseModal(): void {
    if (this.courseForDelete) {
      this.coursesService.removeCourse(this.courseForDelete.id);
    }
    this.titleForDelete = '';
    this.showModal = false;
    this.coursesService.onFetchCourses().subscribe(
      courses => {
        this.listOfCourses = [...courses];
      }
    )
  }

  onCancelModal(): void {
    this.titleForDelete = '';
    this.showModal = false;
  }
}
