import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  // @Output() userLogged: EventEmitter<void> = new EventEmitter<void>();

  email!: string;
  password!: string;
  isButtonEnabled: boolean = false;
  id: number = 1;
  token?: ''; 

  constructor(private authService: AuthenticationService, private router: Router, ) { }

  ngOnInit() {
    if (this.email && this.password) {
      this.isButtonEnabled = true;
    }
    else {
      this.isButtonEnabled = false;
    }
  }

  login(): void {
    // const newUser: User = {
    //   id: this.id,
    //   email: this.email,
    //   password: this.password
    // };
    // this.authService.login(newUser);
    // // this.userLogged.emit();
    // this.email = '';
    // this.password = '';
    // this.router.navigate(['/courses']);
    this.authService.login(this.email, this.password);
    // console.log(this.token);
      this.email = '';
      this.password = '';
      this.router.navigate(['/courses']);
  }
}

