import { Injectable } from '@angular/core';

import { User } from '../interfaces/user.interface.';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  loggedUser?: User;

  login(user: User): void {
    this.loggedUser = {...user};
    localStorage.setItem("token", JSON.stringify(this.loggedUser));
  }

  logout(): void {
    localStorage.removeItem("token");
    this.loggedUser = undefined;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  getUserLogin(): string {
    const token = localStorage.getItem("token");
    if (token) {
      return JSON.parse(token).email;
    } else {
      return '';
    }
  }

}