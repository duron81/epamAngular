import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, Subject, concatMap, map, takeUntil } from 'rxjs';

import { HttpUser } from '../interfaces/http-user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnDestroy {

  loggedUser!: HttpUser | null;
  isUserLogged = new Subject<boolean>();
  isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthSubject.asObservable();
  private userSubject = new Subject<HttpUser>();
  private apiUrl = 'http://localhost:3004';
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient, private router: Router) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  getUserSubject() {
    return this.userSubject.asObservable();
  }

  setUserSubject(user: HttpUser) {
    this.userSubject.next(user);
  }

  login(login: string, password: string){
    return this.http
      .post(
        `${this.apiUrl}/auth/login`,
        {login, password},
      )
      .pipe(map (response => {
        const token = JSON.parse(JSON.stringify(response)).token;
        localStorage.setItem("token", token);
        this.getUser()
          .pipe(res => {
            return res;
          }, takeUntil(this.destroy$))
          .subscribe(res => {
            this.userSubject.next(JSON.parse(JSON.stringify(res)));
          })
        return response;
      }), takeUntil(this.destroy$));
  }

  logout(): void {
    localStorage.removeItem("token");
    this.isUserLogged.next(false);
    this.loggedUser = null;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    this.isAuthSubject.next(!!token);
    return !!token;
  }

  getUser() {
    const token = localStorage.getItem("token");
      return this.http
      .post(
        `${this.apiUrl}/auth/userinfo`,
        {token});
  }

}