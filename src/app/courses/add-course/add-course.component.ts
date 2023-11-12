import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { v4 as uuidv4 } from "uuid";

import { CourseService } from '../../shared/services/course.service';
import { HttpCourse } from '../../shared/interfaces/http-course.interface';
import { HttpAuthor } from '../../shared/interfaces/http-author.interface';
import * as fromApp from '../../store/app.reducer'
import * as CourseActions from '../courses_store/course.actions'

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  @Input() id! : number;
  @Input() title! : string;
  @Input() description! : string;
  @Input() duration! : number;
  @Input() date : Date = new Date();
  durationTime! : string;
  @Input() authors!: HttpAuthor [];
  showAuthors = false;
  isEditMode = false;

  constructor(private router: Router, private courseService: CourseService, private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.isEditMode = !!this.id;

    this.showAuthors = this.isEditMode;
  }

  onCancel(): void {
    this.router.navigate(['courses']);
  }

  onSave(): void {
    let authorsList: HttpAuthor[] = [];

    this.authors.forEach(author => {
      authorsList.push({
        id: parseInt(uuidv4().substr(0, 8), 16),
        name: author.name
      })
    })

    const course: HttpCourse = {
      id: this.isEditMode ? this.id : parseInt(uuidv4().substr(0, 8), 16),
      name: this.title,
      date: this.date.toString(),
      length: this.duration,
      description: this.description,
      isTopRated: false,
      authors: authorsList
    }

    if (this.isEditMode) {
      this.store.dispatch(CourseActions.UpdateCourse({course: course}));
    } else {
      this.store.dispatch(CourseActions.CreateCourse({course: course}));
    }
  }

  onAddAuthors(): void {
    this.showAuthors = true;

    this.courseService.getAuthors()
      .pipe(
        map(response => {
            response.forEach(res => {
              let arrayOfNames = res.name.split(' ');
              res.name = arrayOfNames[1];
              res.lastName = arrayOfNames[0];
            })
            return response
        }),
      )
      .subscribe(response => {
        this.authors = response;
      })
  }

  onDeleteAuthor(item: number) {
    this.authors.splice(item, 1);
    if (this.authors.length === 0) {
      this.showAuthors = false;
    }
  }
}
