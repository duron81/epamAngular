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
      this.authService.getUserLogin().subscribe(response => {
        this.userName = JSON.parse(JSON.stringify(response)).name.first;
        this.router.navigate(['/courses']);
      })
    } else {
      this.userName = '';
      this.router.navigate(['/login']);
    }
  }
}
