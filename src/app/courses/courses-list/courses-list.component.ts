import { Component, OnInit } from '@angular/core';

import { Course } from 'src/app/shared/interfaces/course.interface.';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  
  courses: Course[] = [];

  ngOnInit() {
      this.courses = [{
        id: 1,
        title: 'Some Title 1',
        creationDate: new Date(2023, 5, 1),
        duration: 200,
        description: "Some description 1"
    },
    {
      id: 2,
      title: 'Some Title 2',
      creationDate: new Date(2023, 5, 30),
      duration: 200,
      description: "Some description 2"
    },
    {
      id: 3,
      title: 'Some Title 3',
      creationDate: new Date(2023, 2, 1),
      duration: 200,
      description: "Some description 3"
    }]
  }

  // ngOnInit() {
  //   this.courses = []
  // }

  trackByFn(index: number, item: Course): number {
    return item.id; // Assuming each item has a unique "id" property
  }

  onClickLoadMore(): void {
    console.log('clicked');
  }

  onDeleteCourse(data: number) {
    console.log(data);
  }
}
