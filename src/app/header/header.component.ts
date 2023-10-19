import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthenticationService } from '../shared/services/authentication.service';
import { Subscription, map } from 'rxjs';
import * as AuthActions from './auth_store/auth.actions'
import * as fromApp from '../store/app.reducer'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userName: string = '';
  authUserSubscribtion?: Subscription;

  constructor(
    private authService: AuthenticationService, 
    private router: Router, 
    private store: Store<fromApp.AppState>
    ) {}

  ngOnInit(): void {

    this.store.select('auth')
      .pipe(
        map(authState => authState.name)
      )
      .subscribe(user => {
        this.userName = user;
      })

    if(window.localStorage.getItem('name') && window.localStorage.getItem('token')) {
      const name = localStorage.getItem('name');
      const token = localStorage.getItem('token');
      if (name && token) {
        this.store.dispatch(AuthActions.UpdateUser({name: name, token: token}))
      }
    }
  }

  onLogOut(): void {
    this.store.dispatch(AuthActions.Logout());
    localStorage.removeItem('name')
    this.authService.logout();
    this.userName = '';
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.authUserSubscribtion?.unsubscribe();
  }
}
