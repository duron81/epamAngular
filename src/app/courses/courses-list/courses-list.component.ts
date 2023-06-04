import { Component, OnInit, Input } from '@angular/core';

import { Course } from 'src/app/shared/interfaces/course.interface.';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  constructor(private filterPipe: FilterPipe) {}

  @Input() searchValue: string = '';
  
  courses: Course[] = [];

  ngOnInit() {
      this.courses = [{
        id: 1,
        title: 'Some Title 1',
        creationDate: new Date(2023, 5, 1),
        duration: 200,
        description: "Some description 1",
        topRated: false
    },
    {
      id: 2,
      title: 'Some Title 2',
      creationDate: new Date(2023, 5, 30),
      duration: 100,
      description: "Some description 2",
      topRated: false
    },
    {
      id: 3,
      title: 'Some Title 3',
      creationDate: new Date(2023, 2, 1),
      duration: 50,
      description: "Some description 3",
      topRated: true
    }]
  }

  trackByFn(index: number, item: Course): number {
    return item.id; // Assuming each item has a unique "id" property
  }

  filterItems(courses: Course[], searchtext: string): Course[] {
    return this.filterPipe.transform(courses, searchtext);
  }

  onClickLoadMore(): void {
    console.log('clicked');
  }

  onDeleteCourse(data: number) {
    console.log(data);
  }
}
