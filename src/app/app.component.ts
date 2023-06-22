import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  showLoginModal?: boolean;
  userName = '';


  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.userName = this.authService.getUserLogin();
      this.showLoginModal = false;
    } else {
      this.showLoginModal = true;
    }
  }

  onUserLogged() {
    this.showLoginModal = false;
  }
}
