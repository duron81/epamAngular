import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {
  @Input() nameCourse?: string;
  @Output() canceled: EventEmitter<void> = new EventEmitter<void>();
  @Output() closed: EventEmitter<number> = new EventEmitter<number>();

  onCancel(): void {
    this.canceled.emit();
  }

  onClose(): void {
    this.closed.emit();
  }

}
