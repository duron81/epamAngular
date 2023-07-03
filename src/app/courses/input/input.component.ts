import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() inputValue = new EventEmitter<string>();
  text: string = '';

  onButtonClick() {
    console.log(this.text);
    this.inputValue.emit(this.text);
  }
}
