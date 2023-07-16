import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../shared/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

  searchValue = '';

  constructor(private router: Router) {}

  onSumbitSearch(text: string) {
      this.searchValue = text;
  }

  onAddNewCourse(): void {
    this.router.navigate(['/courses/new']);
  }

}
