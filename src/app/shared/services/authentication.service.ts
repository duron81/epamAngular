import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, Subject, concatMap, map } from 'rxjs';

import { HttpUser } from '../interfaces/http-user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnDestroy {

  loggedUser!: HttpUser | null;
  userSubject = new Subject<HttpUser>();
  isUserLogged = new Subject<boolean>();
  isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthSubject.asObservable();
  private apiUrl = 'http://localhost:3004';
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient, private router: Router) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  login(login: string, password: string){
    this.http
      .post(
        `${this.apiUrl}/auth/login`,
        {login, password},
      )
      .pipe(map (response => {
        const token = JSON.parse(JSON.stringify(response)).token;
        localStorage.setItem("token", token);
        return response;
      }))
      .pipe(map (response => {
        this.getUser()
          .subscribe(res => {
            this.userSubject.next(JSON.parse(JSON.stringify(res)));
          })
        return response;
      }))
      .subscribe(
        (response) => {
          this.isUserLogged.next(true);
          this.router.navigate(['/courses']);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
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