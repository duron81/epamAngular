import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course } from 'src/app/shared/interfaces/course.interface.';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  breadcrumbs = '';
  id!: number;
  description!: string;
  duration!: number;
  date: Date = new Date();
  title!: string;

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const course = this.courseService.getCourseById(this.id);
    if (course) {
      this.description = course.description;
      this.duration = course.duration;
      this.date = course.creationDate;
      this.title = course.title;
    }
    this.breadcrumbs += `/${this.title}`
  }
}
