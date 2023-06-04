import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course.interface.';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Course[]): Course[] {
    if (!array || !Array.isArray(array)) {
      return array;
    }

    return array.sort((a, b) => {
      if (a.creationDate < b.creationDate) {
        return -1;
      } else if (a.creationDate > b.creationDate) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
