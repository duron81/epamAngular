import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() duration!: number;
  @Input() creationDate!: Date;
  @Input() id?: number;
  @Input() topRated?: boolean;



  @Output() deletedItemId: EventEmitter<number> = new EventEmitter<number>();

  onDeletedCilck(): void {
    this.deletedItemId.emit(this.id);
  }

  
}
