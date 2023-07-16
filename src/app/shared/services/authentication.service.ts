import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { HttpUser } from '../interfaces/http-user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedUser!: HttpUser | null;
  private apiUrl = 'http://localhost:3004';

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
        window.location.reload();
      })
  }

  logout(): void {
    localStorage.removeItem("token");
    this.loggedUser = null;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
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