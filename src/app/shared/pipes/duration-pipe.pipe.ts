import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe'
})
export class DurationPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value < 60) {
      return `${value}min`
    } else {
      const hours = Math.floor(value / 60);
      const minutes = value % 60;
      return `${hours}h ${minutes}min`; 
    }
  }

  
}
