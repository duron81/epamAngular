import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

import { v4 as uuidv4 } from "uuid";

import { CourseService } from '../../shared/services/course.service';
import { HttpCourse } from '../../shared/interfaces/http-course.interface';
import { HttpAuthor } from '../../shared/interfaces/http-author.interface';

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
  @Input() date : Date = new Date(2023, 5, 1);
  durationTime! : string;
  authors!: string [];
  showAuthors = false;
  isEditMode = false;

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.isEditMode = !!this.id;
  }

  onCancel(): void {
    this.router.navigate(['courses']);
  }

  onSave(): void {

    let authorsList: HttpAuthor[] = [];

    this.authors.forEach(author => {
      authorsList.push({
        id: parseInt(uuidv4().substr(0, 8), 16),
        name: author
      })
    })

    const course: HttpCourse = {
      id: parseInt(uuidv4().substr(0, 8), 16),
      name: this.title,
      date: this.date.toString(),
      length: this.duration,
      description: this.description,
      isTopRated: false,
      authors: authorsList
    }

    if (this.isEditMode) {
      
    } else {
      this.courseService.createCourse(course).subscribe(
        (response) => {},
        (error) => {
          console.error('Error fetching data:', error);
        }); 
      this.router.navigate(['courses']);
    }
  }

  onAddAuthors(): void {
    this.showAuthors = true;
    this.authors = ['John Doe', 'Yohan Smitz'];
  }

  onDeleteAuthor(item: number) {
    this.authors.splice(item, 1);
    if (this.authors.length === 0) {
      this.showAuthors = false;
    }
  }
}
