import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, Subject, last } from 'rxjs';

import { HttpUser } from '../interfaces/http-user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedUser!: HttpUser | null;
  private apiUrl = 'http://localhost:3004';
  userSubject = new Subject<HttpUser>();
  isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(login: string, password: string){
    this.http
      .post(
        `${this.apiUrl}/auth/login`,
        {login, password},
      )
      .subscribe( response => {
        const token = JSON.parse(JSON.stringify(response)).token;
        localStorage.setItem("token", token);
      })
  }

  logout(): void {
    localStorage.removeItem("token");
    this.loggedUser = null;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    this.isAuthSubject.next(!!token);
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