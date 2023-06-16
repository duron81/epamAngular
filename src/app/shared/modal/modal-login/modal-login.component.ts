import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  email?: string;
  password?: string;
  isButtonEnabled: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.email && this.password) {
      this.isButtonEnabled = true;
    }
    else {
      this.isButtonEnabled = false;
    }
  }

  login(): void {
    // Implement your login logic here
    console.log('Login clicked');
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Clear the form after submission
    this.email = '';
    this.password = '';
  }
}
