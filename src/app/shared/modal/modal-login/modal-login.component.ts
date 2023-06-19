import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../interfaces/user.interface.';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  @Input() appHideIfAuthenticated!: boolean;
  @Output() userLogged: EventEmitter<void> = new EventEmitter<void>();

  email!: string;
  password!: string;
  isButtonEnabled: boolean = false;
  id: number = 1;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    console.log('on init in modal');
    if (this.email && this.password) {
      this.isButtonEnabled = true;
    }
    else {
      this.isButtonEnabled = false;
    }
  }

  login(): void {
    const newUser: User = {
      id: this.id,
      email: this.email,
      password: this.password
    };
    this.authService.login(newUser);
    this.userLogged.emit();
    console.log('logged on successfully');
    this.email = '';
    this.password = '';
  }
}
