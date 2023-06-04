import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  searchValue = '';

  onSumbitSearch(text: string) {
      this.searchValue = text;
  }

}
