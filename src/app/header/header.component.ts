import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userName: string = '';
  authUserSubscribtion?: Subscription;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.authUserSubscribtion = this.authService.getUserSubject()
      .subscribe(user => {
        this.userName = user.name.first
    });
  }

  onLogOut(): void {
    this.authService.logout();
    this.userName = '';
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.authUserSubscribtion?.unsubscribe();
  }
}
