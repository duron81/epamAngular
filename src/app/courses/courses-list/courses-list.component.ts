import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  
  courses: Course[] = [];

  ngOnInit() {
      this.courses = [{
        Id: 1,
        Title: 'Some Title 1',
        CreationDate: new Date(2023, 4, 21),
        Duration: 200,
        Description: "Some description 1"
    },
    {
      Id: 2,
      Title: 'Some Title 2',
      CreationDate: new Date(2023, 4, 21),
      Duration: 200,
      Description: "Some description 2"
    },
    {
      Id: 3,
      Title: 'Some Title 3',
      CreationDate: new Date(2023, 4, 21),
      Duration: 200,
      Description: "Some description 3"
    }]
  }

  trackByFn(index: number, item: any): string {
    return item.Id; // Assuming each item has a unique "id" property
  }

  onClickLoadMore() {
    console.log('clicked');
  }

  onDeleteCourse(data: number) {
    console.log(data);
  }
}
