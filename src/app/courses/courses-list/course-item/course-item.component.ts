import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() duration!: number;
  @Input() creationDate!: string;
  @Input() id?: number;
  @Input() topRated?: boolean;

  @Output() deletedItemId: EventEmitter<number> = new EventEmitter<number>();
  @Output() editItemId: EventEmitter<number> = new EventEmitter<number>();

  constructor (private router: Router) {}

  onDeletedCilck(): void {
    this.deletedItemId.emit(this.id);
  }

  onEditClicked(): void {
    console.log('edit');
    this.editItemId.emit(this.id);
    this.router.navigate([`courses/${this.id}`]);
  }
 }
