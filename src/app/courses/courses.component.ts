import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  searchValue = '';

  constructor(private router: Router) {}

  onSumbitSearch(text: string) {
      this.searchValue = text;
  }

  onAddNewCourse(): void {
    this.router.navigate(['/courses/new']);
  }

}
