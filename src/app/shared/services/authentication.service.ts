import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { HttpUser } from '../interfaces/http-user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedUser!: HttpUser | null;
  userSubject = new Subject<HttpUser>();
  isUserLogged = new Subject<boolean>();
  isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthSubject.asObservable();
  private apiUrl = 'http://localhost:3004';

  constructor(private http: HttpClient, private router: Router) {}

  login(login: string, password: string){
    return this.http
      .post(
        `${this.apiUrl}/auth/login`,
        {login, password},
      )
  }

  logout(): void {
    localStorage.removeItem("token");
    this.isUserLogged.next(false);
    this.loggedUser = null;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    this.isAuthSubject.next(!!token);
    this.getUserLogin().subscribe(response => {
      this.userSubject.next(JSON.parse(JSON.stringify(response)));
    })
    return !!token;
  }

  getUserLogin(): Observable<Object> {
    const token = localStorage.getItem("token");

    return this.http
      .post(
        `${this.apiUrl}/auth/userinfo`,
        {token}
      );
  }

}