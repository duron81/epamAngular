import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userName: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.authService.userSubject.subscribe(
      value => {
        this.userName = value.name.first;
      }
    )
  }

  onLogOut(): void {
    this.authService.logout();
    this.userName = '';
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.authService.userSubject.unsubscribe();
  }
}
