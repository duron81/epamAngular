import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() duration: number | undefined;
  @Input() creationDate:  Date | undefined;
  @Input() id: number | undefined;
  @Output() deletedItemId = new EventEmitter<number>();

  constructor(private datePipe: DatePipe) {}

  formattedDate: string | null = '';

  ngOnInit() {
    this.formattedDate = this.datePipe.transform(this.creationDate, 'yyyy-MM-dd');
  }

  onDeletedCilck() {
    this.deletedItemId.emit(this.id);
  }

}
