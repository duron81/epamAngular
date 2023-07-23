import { Component } from '@angular/core';

import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(private courseService: CourseService) {}

  onKeyUp(value: string) {
      this.courseService.inputSubject.next(value);
  }

}
