import { Component, } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  title! : string;
  description! : string;
  duration! : number;
  durationTime! : string;
  date! : string;
  authors!: string [];
  showAuthors = false;

  onCancel(): void {
    console.log('cancel is clicked');
  }

  onSave(): void {
    console.log('save is clicked');
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
