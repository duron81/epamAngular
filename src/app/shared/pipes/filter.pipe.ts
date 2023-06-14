import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course.interface.';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], searchtext: string): Course[] {
    if (!courses) {
      return [];
    }
    if (!searchtext) {
      return courses;
    }
    searchtext = searchtext.toLowerCase();
    return courses.filter(course => {
      return course.title.toLowerCase().includes(searchtext);
    })
  }

}
