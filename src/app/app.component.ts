import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { AuthenticationService } from './shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  userName = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.userName = this.authService.getUserLogin();
      this.router.navigate(['/courses']);
    } else {
      this.userName = '';
      this.router.navigate(['/login']);
    }
  }

  // onUserLogged() {
  //   this.showLoginModal = false;
  //   console.log('user logged emission');
  // }
}
