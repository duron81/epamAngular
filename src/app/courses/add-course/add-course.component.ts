import { Component } from '@angular/core';

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

  onCancel(): void {
    console.log('cancel is clicked');
  }

  onSave(): void {
    console.log('save is clicked');
  }
}
