import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { CourseService } from '../../services/course.service';


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

  constructor(
    private authService: AuthenticationService, 
    private courseService: CourseService, 
    private router: Router
  ) { }

  ngOnInit() {
    if (this.email && this.password) {
      this.isButtonEnabled = true;
    }
    else {
      this.isButtonEnabled = false;
    }
  }

  login(): void {
    this.courseService.loadingSubject.next(true);
    this.authService.login(this.email, this.password);
    this.email = '';
    this.password = '';
    console.log('login comp');
    // this.router.navigate(['/courses']);
    window.location.reload();
    this.courseService.loadingSubject.next(false);
  }
}

