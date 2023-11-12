import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { CourseService } from 'src/app/shared/services/course.service';
import * as fromApp from '../../store/app.reducer'
import * as CoursesActions from '../courses_store/course.actions'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(private store: Store<fromApp.AppState>,) {}

  onKeyUp(value: string) {
      this.store.dispatch(CoursesActions.FetchCoursesWithFilter({filter: value}))
  }

}
