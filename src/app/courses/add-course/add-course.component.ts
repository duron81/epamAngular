import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/shared/interfaces/course.interface.';
import { CourseService } from 'src/app/shared/services/course.service';

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
  durationTime! : string;
  @Input() date : Date = new Date(2023, 5, 1);
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
    const course: Course = {
      id: this.id,
      title: this.title,
      creationDate: this.date,
      duration: this.duration,
      description: this.description,
      topRated: false
    }

    if (this.isEditMode) {
      this.courseService.updateCourse(course);
      this.router.navigate(['courses']);
    } else {
      this.courseService.createCourse(course);
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
