import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpAuthor } from 'src/app/shared/interfaces/http-author.interface';

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
  authors!: HttpAuthor[];

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {


    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(this.id).subscribe(
      response => {
        if (response) {
          this.description = response.description;
          this.duration = response.length;
          this.date = new Date(response.date);
          this.authors = response.authors;
          this.title = response.name;
        }
        this.breadcrumbs += `/${this.title}`
      }
    )
  }
}
